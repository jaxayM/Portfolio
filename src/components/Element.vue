<template>
    <div class="text-center 
      bg-sky-500/50 
      inline-block 
      rounded-lg p-3 m-2 
      hover:scale-110 
      transition duration-500 
      border-4 shadow-5
    ">
        <img class="w-150 h-150" alt="image" :src="imageUrl" />
        <div>
          <h2>{{Title}}</h2>
          <code class="underline">
            <a :href="log">Link to project page</a>
          </code>
        </div>
 
    </div>

</template>
<script>
export default {
  props: ['Title', 'source', 'log', 'isIn'],
  data(){
    const imageUrl = new URL(`../assets/${this.source}`, import.meta.url).href 
    return {
      imageUrl
    }
  }
} 
</script>
<style></style>