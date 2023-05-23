<script setup lang="ts">

import { reactive } from 'vue';

//interface for typescript
interface State{
  query: string
}

export default{
  setup(){
    const state = reactive<State>({
      query: ""
    })
    // function to update the query
    const setQuery = (newQuery: string) => {
      state.query = newQuery
    }

    return {
      query: state.query,
      setQuery
    }
  }
}

</script>

<template>

</template>

<style>

</style>