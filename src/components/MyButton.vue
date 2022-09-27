<template>
    <button> {{text? text : "Button"}}
  </button>
</template>


<script>
export default {
    props: ['text']   
}
</script>

<style scoped>
  button {
    background: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover{
    background-color: aliceblue;
  }
  button:active{
    background-color: gainsboro;
  }
</style>
 