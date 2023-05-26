<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from "axios"
  import OneUser from './OneUser.vue';

  export default defineComponent({
    name: "Admin",
    data(){
      return {
        users: []
      }
    },
    mounted(){
      axios.get("http://localhost:3001/user/getAll")
      .then(result => this.users = result)
    }
  })
</script>

<template>

<div>
  <table>
    <thead>
      <tr>
        <th class="column-container">Email</th>
        <th class="column-container">First Name</th>
        <th class="column-container">Last Name</th>
        <th class="column-container">Admin</th>
      </tr>
    </thead>
    <div id="users-container">
      <OneUser v-for="(e,i) in this.users" :key="i" :id="e._id" :email="e.email" :fName="e.fName" :lName="e.lName" :isAdmin="e.isAdmin"/>
    </div>
  </table>
</div>

</template>

<style scoped>

</style>