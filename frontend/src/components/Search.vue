<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
name:"Search",
props:['hello'],
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


</script>

<template>

<div>
    <Navbar v-bind:showSearch="false" v-bind:hello="hello" />
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