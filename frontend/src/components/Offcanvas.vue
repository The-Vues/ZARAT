<template>
    <div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div style="margin-left: 30px;">
          <div id="gender-container">
            <button class="search-gender" @click="setChosen('woman')">WOMAN</button>
            <button class="search-gender" @click="setChosen('man')">MAN</button>
            <button class="search-gender" @click="setChosen('kids')">KIDS</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">

  import { ref } from 'vue';
  
  export default {
    name: "Offcanvas",
    setup() {
      const chosen = ref('woman');
  
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
  .search-gender{
    position: relative;
    border: none;
    background: inherit;
    font-family: "regular";

  }
  </style>
  