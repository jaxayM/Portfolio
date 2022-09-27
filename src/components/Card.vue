 <template>
 <div class="card" >
  <div class="title">
    <slot name="title"/>
  </div>
  <div class="content">
    <slot name="content"/>
  </div> 
  <div class="description">
    <slot name="description"/>
  </div>
 </div>
</template>
 
<script>
  export default {
    
  }
</script>

<style scoped>

.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  /* max-height: 350px; */
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
  display: inline;
}
  
.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title, .content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>
