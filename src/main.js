import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/Product.vue'
import Ecommerce from './views/Ecommerce.vue' 
import Projects from './views/Projects.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/app", component: Product },
  { path: "/projects", component: Projects },
  { path: "/about", component: About },
  { path: "/ecom", component: Ecommerce },
]

const router = createRouter({
  history: createWebHistory(),
  routes
  
})
//  
const app = createApp(App)
app.use(router)
app.mount('#app')
