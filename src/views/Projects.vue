<template>
    <div v-for="i in Matrix">
        <Element :source="i.image" :log="i.code" :Title="i.title" :isIn="i.inhost"></Element>
    </div>
</template>
<script>

import  Element  from '../components/Element.vue'

export default {
  components: {
    Element,
  },
  data(){
    return {
        Matrix: [
            {
                title: 'Ecommerce',
                image: 'icons8.gif',
                inhost: true,
                code: '/ecom'
            },{
                title: 'Todo',
                image: 'icons8.gif',
                code: '/app',
                inhost: true,
            },{
                title: 'Coconut',
                image: 'icons8.gif',
                code: 'https://www.google.com/',
                inhost: false,
            },{
                title: 'Blog',
                image: 'icons8.gif',
                code: 'https://jaxaym.github.io/blog-ab',
                inhost: false,
            },
        ]
    }
  }
} 
</script>
<style></style>