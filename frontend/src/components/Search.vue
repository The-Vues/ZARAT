<script lang="ts">

import { defineComponent } from 'vue';

import Navbar from './Navbar.vue';
import axios from 'axios';

export default defineComponent({
  name:"Search",
  components: { Navbar },
  data(){
    return{
      query:"",
      gender: "woman",
      items: []
    }
  },
  methods:{ 

    handleGenderClick(str: string){
      this.gender = str
    },

    handleSearch(){
      axios.get("")
    },
  }
})
</script>

<template>

<div>
    <Navbar/>
    <div id="search-gender-container">
      <div id="gender-container">
        <button class="search-gender" @click="handleGenderClick('woman')">WOMAN</button>
        <button class="search-gender" @click="handleGenderClick('man')">MAN</button>
        <button class="search-gender" @click="handleGenderClick('kids')">KIDS</button>
      </div>
      <input
        type="text"
        v-model="this.query"
        placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."
      />
    </div>
    <div id="items-container">
      <OneItem v-for="(e, i) in this.items" :key="i" :id="e._id" :name="e.name" :price="e.price" :image="e.image" />
    </div>
  </div>

</template>

<style scoped>
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