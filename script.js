import { createApp } from "https://unpkg.com/petite-vue?module";
const STORAGE_KEY = "todos-petite-vue";
const todoStorage = {
	fetch() {
		const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
		todos.forEach((todo, index) => {
			todo.id = index;
		});
		todoStorage.uid = todos.length;
		return todos;
	},
	save(todos) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	}
};
const filters = {
	all(todos) {
		return todos;
	},
	active(todos) {
		return todos.filter((todo) => {
			return !todo.completed;
		});
	},
	completed(todos) {
		return todos.filter(function (todo) {
			return todo.completed;
		});
	}
};
createApp({
	todos: todoStorage.fetch(),
	newTodo: "",
	editedTodo: null,
	visibility: "all",
	get filteredTodos() {
		return filters[this.visibility](this.todos);
	},
	get remaining() {
		return filters.active(this.todos).length;
	},
	get allDone() {
		return this.remaining === 0;
	},
	set allDone(value) {
		this.todos.forEach(function (todo) {
			todo.completed = value;
		});
	},
	save() {
		todoStorage.save(this.todos);
	},
	setupRouting() {
		const onHashChange = () => {
			var visibility = window.location.hash.replace(/#\/?/, "");
			if (filters[visibility]) {
				this.visibility = visibility;
			} else {
				window.location.hash = "";
				this.visibility = "all";
			}
		};
		window.addEventListener("hashchange", onHashChange);
		onHashChange();
	},
	addTodo() {
		var value = this.newTodo && this.newTodo.trim();
		if (!value) {
			return;
		}
		this.todos.push({
			id: todoStorage.uid++,
			title: value,
			completed: false
		});
		this.newTodo = "";
	},
	removeTodo(todo) {
		this.todos.splice(this.todos.indexOf(todo), 1);
	},
	editTodo(todo) {
		this.beforeEditCache = todo.title;
		this.editedTodo = todo;
	},
	doneEdit(todo) {
		if (!this.editedTodo) {
			return;
		}
		this.editedTodo = null;
		todo.title = todo.title.trim();
		if (!todo.title) {
			this.removeTodo(todo);
		}
	},
	cancelEdit(todo) {
		this.editedTodo = null;
		todo.title = this.beforeEditCache;
	},
	removeCompleted() {
		this.todos = filters.active(this.todos);
	},
	pluralize(n) {
		return n === 1 ? "item" : "items";
	}
}).mount("#app");
