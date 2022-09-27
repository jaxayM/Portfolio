<script>
    export default{ 
      props: {
        purchased: Object
      },
      methods: {
        remove(prod){
          this.$emit("terminate", prod)
        }
      }
    }
  </script>
  
  <template>
  <div class="form">
    <label>Type Your Whatsapp </label>
    <input class="whts" type="search" placeholder="Whatsapp Number">
    <button @click="() => {purchased.forEach(element => {
      remove(element)
    });}" class="whts" type="button" value="">Confirm Purchase</button>
    <option class="whts" value="Filter">Purchased products: </option>
    <ul>
      <li v-for="prod in purchased">
        <button class="delete" @click="remove(prod)">x</button>
        Product: {{prod.product}}, price: {{prod.price}}
      
    </li>
  </ul>
  </div>
  </template>
  
  <style scoped>
  .form {
    display: flex;
    flex-direction: column;
    width: 500px;
    /* width: -webkit-fill-available; */
    /* margin: 10px calc(min(300px,(120vw - 600px)/2)); */
    padding: 10px;
    content-visibility: auto;
    border: 2px solid rebeccapurple;
    background-color: snow;
    position: fixed;
    max-width: calc(min(80vw, 500px));
    position: absolute;
    right: calc(50% - calc(min(80vw, 500px))/2);
  }
  .whts{
    margin: 5px;
  }
  ul{
    list-style: none;
  }
  li{
    padding: 5px;
    float: left;
  }

  .delete{
    background-color: rgba(255, 50, 50, 0.9);
    color: whitesmoke;
    font-weight: 600;
  }
  
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  color: white;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

  </style>
  