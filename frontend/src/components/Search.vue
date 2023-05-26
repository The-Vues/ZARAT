<script lang="ts">

import { defineComponent } from 'vue';

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
</script>

<template>

<div>
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
  </div>

</template>

<style scoped>
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