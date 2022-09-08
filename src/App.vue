<script>
import About from './views/About.vue'
import Home from './views/Home.vue'

export default {
  components: {
    About, Home, 
  }
} 
</script>

<template>

<div :class="appTheme" class="over grid grid-row-2 pt-0.5">

    <div class="navibar container font-general-medium text-lg">
      <ul class="flex m-0 mt-5 p-5 justify-center items-center ">
        <li class="mr-6">
          <router-link class="text-blue-500 hover:text-blue-800 router-link" to="/">Home </router-link>
        </li>
        <li class="mr-6">
          <router-link class="text-blue-500 hover:text-blue-800 router-link" to="/about">About </router-link>
        </li>
        <li class="mr-6">
          <router-link class="text-gray-400 cursor-not-allowed" to="/app">App</router-link>
        </li>
      </ul>
    </div>
    
      <RouterView class="all" :theme="appTheme"/>
  
	</div>
</template>

<style>

  #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.vue-back-to-top {
	@apply p-2 bg-indigo-500 hover:bg-indigo-600 text-white transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}

.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}
  .over {
    height: 200%;
  }
.all{
  height: 50%;
  z-index: 1;
/*  position: fixed;*/
}
.navibar {
    position: relative;
    z-index: 100;
}
  
@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}

</style>
