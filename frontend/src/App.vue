<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'


export default defineComponent({
  name: 'App',
  components: {
    RouterView
  }
})
</script>

<style>
  @font-face {
    font-family: "medium";
    src: url("./fonts/Helvetica Neue W01 66 Medium It.ttf");
  }

  @font-face {
    font-family: "regular";
    src: url("./fonts/Neue Helvetica Condensed BQ Regular.otf");
  }
</style>
