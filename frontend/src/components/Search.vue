<script lang="ts">

import { defineComponent } from 'vue';

<<<<<<< HEAD
export default defineComponent({
name:"Search",
data(){
  return{
    query:""
  }
},
methods:{
  check(){console.log(this.query)}
}, 
mounted(){
  this.query="mehdi"

}
})
// //interface for typescript
// interface State{
//   query: string,
//   gender: string,
//   items: Array<any>,
// }
  // setup(){
  //   const state: State = reactive<State>({
  //     query: "",
  //     items: [],
  //     gender: "woman"
  //   })

  //   // function to update the query
  //   const setQuery = (newQuery: string) => {
  //     state.query = newQuery
  //   }

  //   // function that we use to update the gender on button click
  //   const handleGenderClick = (updatedGender) => {
  //     state.gender = updatedGender
  //   }

  //   return {
  //     state,
  //     setQuery,
  //     handleGenderClick
  //   }
  // }


=======
import Navbar from './Navbar.vue';
import OneItem from './OneItem.vue';
import axios from 'axios';

export default defineComponent({
  name:"Search",
  components: { Navbar, OneItem },
  data(){
    return{
      query:"",
      gender: "female",
      items: []
    }
  },
  methods:{ 

    handleGenderClick(str: string){
      this.gender = str
    },

    handleSearch(){
      if(this.query.length){
        axios.get(`http://localhost:3001/items/search/${this.gender}?query=${this.query}`)
        .then(result => this.items = result.data)
      }
      else{
        this.items = []
      }
    },
  }
})
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
</script>

<template>

<div>
<<<<<<< HEAD
    <Navbar :showSearch="false" />
    <div id="search-gender-container">
      <div id="gender-container">
        <!-- <button class="search-gender" @click="handleGenderClick('woman')">WOMAN</button>
        <button class="search-gender" @click="handleGenderClick('man')">MAN</button>
        <button class="search-gender" @click="handleGenderClick('kids')">KIDS</button> -->
      </div>
      <!-- <input
        type="text"
        v-model="state.query"
        placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."
      /> -->
    </div>
    <!-- <div id="items-container">
      <OneItem v-for="(e, i) in state.items" :key="i" :id="e._id" :name="e.name" :price="e.price" :image="e.image" />
    </div> -->
=======
    <Navbar/>
    <div id="search-gender-container">
      <div id="gender-container">
        <button :class=' gender === "female" ? "search-gender-active" : "search-gender-inactive"' @click="handleGenderClick('female')">WOMAN</button>
        <button :class=' gender === "male" ? "search-gender-active" : "search-gender-inactive"' @click="handleGenderClick('male')">MAN</button>
        <button :class=' gender === "kids" ? "search-gender-active" : "search-gender-inactive"' @click="handleGenderClick('kids')">KIDS</button>
      </div>
      <input
        type="text"
        v-model="this.query"
        @input="handleSearch"
        placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."
        style="font-family: medium;"
      />
    </div>
    <div id="items-container">
      <OneItem v-for="(e, i) in this.items" :key="i" :id="e._id" :name="e.name" :price="e.price" :image="e.image" />
    </div>
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
  </div>

</template>

<style scoped>
<<<<<<< HEAD
=======
  .search-gender-active {
    position: relative;
    border: none;
    background: inherit;
    font-family: "regular";
  }

  .search-gender-active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: calc((100% - 20%) / 2);
    width: 20%;
    height: 2px;
    background-color: black;
  }

  .search-gender-inactive {
    position: relative;
    border: none;
    background: inherit;
    font-family: "regular";
  }

  #items-container{
    display: flex;
    flex-direction: row;
  }

>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
  #search-gender-container{
    margin: 20px;
  }

  #search-gender-container input{
    margin-top: 40px;
    width: 1250px;
    border: none; 
    border-bottom: 1px solid rgb(0, 0, 0);
    font-family: "default";
    outline: none;
  }
</style>