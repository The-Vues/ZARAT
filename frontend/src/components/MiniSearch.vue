<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "MiniSearch"
  })
</script>

<template>
  <div id="search-container">
    <input id="search-bar" type="search" placeholder="SEARCH" readOnly/>      
  </div>
</template>

<style scoped>
  #search-bar{
    background-color: inherit;
    border: none;
    border-bottom: 1px solid rgb(34, 34, 34);
    outline: none;
    cursor: pointer;
    width: 130px;
    height: 20px;
    font-size: 12px;
  }
</style>