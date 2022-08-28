<script>
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import MyButton from './components/MyButton.vue'
import {reactive} from 'vue'

export default {
  components: {
    Card,
    HelloWorld,
    MyButton
  },
  
  methods: {
    create() {
      this.state.count = this.state.count ? "" : "none"
      console.log('error')
      let popup = document.getElementById("page")
    }
  },
  
  setup(){
    const state = reactive({count:"none",
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
      state
    }
  }
} 
</script>

<template>
  <hello-world @runCreation="create"/>
  
  <span id="page" 
        :style="`display:${state.count} `"
  >
    
    <form>
      <input value="Project"/>
      <input value="Task"/>
      <input value="Description"/>
    </form>
  
  </span>

  <card v-for="job in state.entries">
    <template v-slot:title>{{job.project}}</template>
    <template v-slot:content>{{job.task}}</template>
    <template v-slot:description>{{job.description}}</template>
  </card>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
