<script>
  import Card from '../components/Card.vue'
  import MyButton from '../components/MyButton.vue'
  import Search from '../components/Search.vue'
  import Cart from '../components/Cart.vue'
  import {reactive, ref} from 'vue'
  
  export default {
    components: {
      Card, Cart,
      MyButton,
      Search
    },
    
    setup(){
      const count = 0
      let visible = ref(false)
      function shart($evt) { // show cart
        visible.value = !visible.value
      }
      function setItems(params) {
        state.filtered = params
      }
      function add(i){
        state.purchased.add(i)
      }
      let products = [
          {   // id?
            product:"Fitness device",
            price:"200 Dhs",
            description:""
          },
          {
            product:"Coding desk",
            price:"120 Dhs",
            description:""
          },
          {
            product:"Business card",
            price:"20 Dhs",
            description:""
          },
          {
            product:"shopping card",
            price:"10 Dhs",
            description:""
          },
          {
            product:"facebook card",
            price:"300 Dhs",
            description:""
          },
          {
            product:"Coding desk",
            price:"120 Dhs",
            description:""
          },
          {
            product:"Business card",
            price:"20 Dhs",
            description:""
          },
          {
            product:"shopping card",
            price:"10 Dhs",
            description:""
          },
          {
            product:"facebook card",
            price:"300 Dhs",
            description:""
          }
        ]
      const state = reactive({
        purchased: new Set(),
        entries: products.slice(),
        filtered: products.slice()
      })

      function end(prod){
        state.purchased.delete(prod)
      }

      return {
        state, count, visible, shart, setItems, add, end
      }
    }
  } 
  </script>
  
  <template>
    <div class="nav">
      <ul>
        <li class="search">
          <search :entries="state.entries" @getItems="setItems"/>
        </li>
        <li class="cart">
          <img src="../assets/icons8.gif" style="width:30px" alt="icon" @click="shart">
          <div v-if="state.purchased.size != 0" class="numeral" @click="shart">{{state.purchased.size }}</div>
          
        </li>
      </ul>
    </div>
    <div class="cont">
    <cart v-if="visible" :purchased="state.purchased" @terminate="end"/>
    <card class="card" v-for="p in state.filtered">
      <template v-slot:title>{{p.product}}</template>
      <template class="content" v-slot:content> 
      <img class="" :src="'/'+(count<=10 ? ++count : count+1).toString() + '.jpg'" alt="Photo"> 
      </template>
      <template v-slot:description>{{p.price}}<MyButton text="🛒" @click="add(p)"/></template>
    </card>
    </div>
  </template>
  
  <style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  .content img{
    height: 160px;
  }
  .cont{
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    padding: 0;
    flex: 3 32%;
    margin: 5px;
  }
  
  .nav{
    height: 50px;
    border-bottom: 2px solid #42b883aa;
    position: sticky;
  }
  
  .nav ul, .search {
    display: flex;
    flex-direction: row;
    list-style: none;
    
  }
  .nav ul li{
    margin-left: 50px;
  }
  
  .cart{
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
  }

  .seeme{
    visibility: hidden;
  }

  .numeral{
    position: absolute;
    background-color: red;
    color: white;
    font-size: small;
    font-weight: bold;
    width: 19px;
    height: 16px;
    border-radius: 50%;
    padding-bottom: 5px;
    top: 10px;
    margin-right: -7px;
  }
    
  
    
  </style>