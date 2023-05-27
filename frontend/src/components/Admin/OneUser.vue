<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "OneUser",
  props:{
    id: String,
    email: String,
    fName: String,
    lName: String,
    isAdmin: Boolean
  },
  mounted(){
    console.log("hello")
  }
})

</script>

<template>
  <tbody>
    <td class="user-info">{{ email }}</td>
    <td class="user-info">{{ fName }}</td>
    <td class="user-info">{{ lName }}</td>
    <td class="user-info">{{ isAdmin }}</td>
    <td class="user-info">
      <button></button>
    </td>
  </tbody>
</template>

<style scoped>

</style>