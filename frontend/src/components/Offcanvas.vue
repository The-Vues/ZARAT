<template>
    <div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div style="margin-left: 30px;">
          <div id="gender-container">
            <button class="search-gender" @click="setChosen('female')">WOMAN</button>
            <button class="search-gender" @click="setChosen('male')">MAN</button>
            <button class="search-gender" @click="setChosen('kids')">KIDS</button>
          </div>
        </div>
        <div class="woman-container" v-if="chosen==='female'">
          <RouterLink class="link" to="/clothes/female/DRESSES">Dresses</RouterLink>
          <RouterLink class="link" to="/clothes/female/JACKETS | TRENCH COATS">Jackets</RouterLink>
          <RouterLink class="link" to="/clothes/female/jean">Jeans</RouterLink>
          <RouterLink class="link" to="/clothes/female/shirt">Shirts</RouterLink>
          <RouterLink class="link" to="/clothes/female/SKIRT">Skirts</RouterLink>
          <RouterLink class="link" to="/clothes/female/top">Tops</RouterLink>
          <RouterLink class="link" to="/clothes/female/trousers">Trousers</RouterLink>
          <RouterLink class="link" to="/clothes/female/waistcoasts">Waistcoats</RouterLink>
        </div>
        <div class="woman-container" v-if="chosen==='male'">
          <RouterLink class="link" to="/clothes/male/hoodie">Hoodies</RouterLink>
          <RouterLink class="link" to="/clothes/male/jacket">Jackets</RouterLink>
          <RouterLink class="link" to="/clothes/male/jean">Jeans</RouterLink>
          <RouterLink class="link" to="/clothes/male/shirts">Shirts</RouterLink>
          <RouterLink class="link" to="/clothes/male/short">Shorts</RouterLink>
          <RouterLink class="link" to="/clothes/male/suits">Suits</RouterLink>
          <RouterLink class="link" to="/clothes/male/trousers">Trousers</RouterLink>
        </div>
        <div class="woman-container" v-if="chosen==='kids'">
          <RouterLink class="link" to="/clothes/kids/babyboy">Baby Boy</RouterLink>
          <RouterLink class="link" to="/clothes/kids/babygirl">Baby Girl</RouterLink>
          <RouterLink class="link" to="/clothes/kids/boy">Boy</RouterLink>
          <RouterLink class="link" to="/clothes/kids/girl">Girl</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">

  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  export default {
    name: "Offcanvas",
    setup() {
      const chosen = ref('female');
  
      const setChosen = (gender: any) => {
        chosen.value = gender;
      };
  
      return {
        chosen,
        setChosen,
      };
    },
  };
  </script>
  
<style scoped>
  .woman-container{
    display: flex;
    flex-direction: column;
    margin: 30px;
  }
  .link{
    text-decoration: none;
    font-family: "regular";
    font-size: 20px;
    margin-bottom: 15px;
    color: black;
  }
</style>