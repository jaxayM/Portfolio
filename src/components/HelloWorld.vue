<script>
  export default{ 
    
    methods: {
      createJob($evt) {
        this.$emit('runCreation',$evt)
        console.log('error1')
      }
    }
  }
</script>

<template>
<div class="navbar">
  <label>Logo</label>
  <input class="center" type="search" value="Search">
  <button @click="createJob" class="center" type="button" value="">Create</button>
  <option class="right" value="Filter">Filter</option>
</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

/* Header/logo Title */
.header {
  padding: 80px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}
.read-the-docs {
  color: #888;
}
    
.top {
    padding: 60px;
    text-align: center;
    font-size: 30px;
    }
    
.navbar {
    overflow: hidden;
    background-color: #333;
    color: aqua;
    text-decoration-color: beige;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
}
.row {  
display: -ms-flexbox; /* IE10 */
display: flex;
-ms-flex-wrap: wrap; /* IE10 */
flex-wrap: wrap;
}
.navbar * {
float: left;
display: block;
color: yellowgreen;
text-align: center;
padding: 14px 20px;
    
font-size: 16px;
text-decoration: none;
}


/* Right-aligned link */
.navbar .right {
  float: right;
}

    .navbar .center {
        
    margin-right: 2em;
    }
    
.navbar :hover {
  background-color: #ddd;
  color: black;
}

/* Active/current link */
.navbar .active {
  background-color: #666;
  color: white;
}
</style>
