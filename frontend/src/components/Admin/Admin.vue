<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from "axios"

  import OneUser from './OneUser.vue';
  import Navbar from '../Navbar.vue';

  export default defineComponent({
    name: "Admin",
    components: { OneUser, Navbar },
    data(){
      return {
        rawUsers: [],
        query: ""
      }
    },

    mounted(){
      axios.get("http://localhost:3001/user/getAll")
      .then(result => this.rawUsers = result.data)
    },

    methods: {

      searchUsers(){
        axios.get(`http://localhost:3001/user/searchUsers?query=${this.query}`)
        .then(result => this.rawUsers = result.data)
      }
      
    }
  })
</script>

<template>

<div class="admin-parent">
  <Navbar/>
  <input id="user-search" type="text" placeholder="search for users" @input="searchUsers" v-model="query">
  <table>
    <thead>
      <tr>
        <th class="column-container">Email</th>
        <th class="column-container">First Name</th>
        <th class="column-container">Last Name</th>
        <th class="column-container">Admin</th>
      </tr>
    </thead>
      <OneUser v-for="(e,i) in this.rawUsers" :key="i" :id="e._id" :email="e.email" :fName="e.fName" :lName="e.lName" :isAdmin="e.isAdmin"/>
  </table>
</div>

</template>

<style scoped>
  .column-container{
    padding: 50px
  }

  #user-search{
    padding-right: 50rem;
    margin-left: 50px;
    background-color: inherit;
    border: none;
    border-bottom: 1px solid rgb(34,34,34);
    outline: none;
  }
</style>