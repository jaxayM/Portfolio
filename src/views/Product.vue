<script>
import HelloWorld from '../components/HelloWorld.vue'
import Card from '../components/Card.vue'
import MyButton from '../components/MyButton.vue'
import {reactive} from 'vue'
import axios from 'axios'

export default {
  components: {
    Card,
    HelloWorld,
    MyButton
  },
  
  methods: {
    create() {
      this.state.count = this.state.count ? "" : "none"
      console.log(state.entries)
      let popup = document.getElementById("page")
    },
    add() {
//      axios,post,add
      console.log(api)
    }
  },
  
   setup(){
    const api = "http://127.0.0.1:8000"
    const state =  reactive({count:"none",
                           entries: [
                               {
                                 project:"Fitness",
                                 task:"exercice",
                                 description:"perform 10 push-ups!"
                               },
                               {
                                 project:"Coding",
                                 task:"exercice",
                                 description:"code a website!"
                               },
                               {
                                 project:"Business",
                                 task:"Plan a startup",
                                 description:"brainstorm ideas"
                               }
                             ]
         })
    
    return {
      state,
    }
  },
  async mounted () {
    
    let res = await axios.get("http://localho.st:8000/todos/", {mode: 'no-cors'})
    this.state.entries.push.apply(this.state.entries, res.data)
    console.log(res.data)

  },
} 
</script>

<template>
  <hello-world @runCreation="create"/>
  <div class="container">
  <span id="page" 
        :style="`display:${state.count} `">
    
    <form class="container flex flex-col md:flex-row max-w-xs">
      <input class="m-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Project"/>
      <input class="m-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Task"/>
      <input class="m-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description"/>
      <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="add" type="button" value="Add"/>
    </form>
  
  </span>
  <div class="container flex flex-col md:flex-row conteneur">
    <card v-for="job in state.entries">
      <template v-slot:title>{{job.project?job.project:"General" }}</template>
      <template v-slot:content>{{job.task}}</template>
      <template v-slot:description>{{job.description?job.description:job.title}} {{job.complete?"✅":""}}</template>
    </card>
  </div>
</div>
</template>

<style scoped>
  
  .card{
    margin: 5px;
    width: 200px; 
  }
  .spa{
    height: 100px;
  }
  
</style>
