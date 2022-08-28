
<script setup>
  defineProps( {
    project: {
      type: String
    },
    task: {
      type: String
    },
    description: {
      type: String
    }
  })

</script>

<template>
  <div>
    <ul>
        <li>Project: {{ project }}</li>
        <li>Task: {{ task }}</li>
        <li>Description: {{ description }}</li>
    </ul>
  </div>
</template>


<style scoped>
  li {
    list-style: none;
  }
  div {
    background: darkslateblue;
    color: white;
    border-color: white;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px 100px;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
    display: flex;
    
  }
  ul{
    padding: 0px;
    flex-direction: column;
    float: inherit;
  }
  div:hover{
    
    filter: brightness(125%);
  }
</style>
 