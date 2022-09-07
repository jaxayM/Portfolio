import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/Product.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/app", component: Product },
]

const router = createRouter({
  history: createWebHistory(),
  routes
  
})
//  
const app = createApp(App)
app.use(router)
app.mount('#app')
