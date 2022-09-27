<template>
    <input placeholder="Search" v-model="tag" @input="lookup"/>
    <input type="button" class="button" value="🔍" @click="lookup"/>
    
</template>
<script>
import {ref} from 'vue'

export default{
    
    props:{
        entries: Object
    },
    setup(props, context){
        let tag = ref("")
        function lookup(evt){
            context.emit("getItems", filter(props.entries))
        }
        function filter(items){
            return items.filter(item => item.product.toLowerCase().includes(tag.value.toLowerCase()))
        }

        return {tag, lookup, filter}
    }
}
</script>

<style scoped>
    input{
        height: 28px;
        padding: 0;
        padding-left: 5px;
        margin:0;
    }
    .button{
        background: white;
        margin-left: 5px;
        width: 30px;
        height: 30px;
        border-radius: 10%;
        cursor: pointer;
    }
    .button:hover{
        background: whitesmoke;
    }
    .button:active{
        background: gainsboro;
    }
</style>