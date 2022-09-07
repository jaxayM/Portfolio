<script>
import About from './views/About.vue'
import Home from './views/Home.vue'

export default {
  components: {
    About, Home
  }
} 
</script>

<template>
  <h1 style="position: absolute;">
    <div class="navbar">
      <ul>
        <li>
          <router-link to="/">Home; </router-link>
        </li>
        <li>
          <router-link to="/about">About;</router-link>
        </li>
        <li>
          <router-link to="/app">App</router-link>
        </li>
      </ul>
    </div>
  </h1>
<RouterView/>
</template>

<style>
  * {
/*    color: darkviolet;*/
  }
.navbar {
    white-space: nowrap;
}
.navbar li {
  display: inline-block;
}


</style>
