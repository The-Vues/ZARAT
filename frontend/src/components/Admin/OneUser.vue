<script lang="ts">
import axios from 'axios';
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

  methods: {
    async makeAdmin(){
      await axios.get(`http://localhost:3001/user/makeAdmin/${this.id}`)
      alert(`user: ${this.id} has been set to admin`)
      window.location.reload()
    },
    async removeUser(){
      await axios.delete(`http://localhost:3001/user/removeUser/${this.id}`)
      alert(`user: ${this.id} has been removed`)
      window.location.reload()
    }
  }
})

</script>

<template>
  <tbody>
    <tr class="tr-container">
      <td class="user-info">{{ email }}</td>
      <td class="user-info">{{ fName }}</td>
      <td class="user-info">{{ lName }}</td>
      <td class="user-info" :style="isAdmin ? 'color: blue' : 'color: orange'">{{ isAdmin ? 'Yes' : "No" }}</td>
      <td class="user-info">
        <button class="admin-button" @click="makeAdmin" v-if="!isAdmin">Make Admin</button>
        <button class="admin-button remove" @click="removeUser">Remove Account</button>
      </td>
    </tr>
  </tbody>
</template>

<style scoped>

  .user-info{
    padding-left: 50px
  }

  .admin-button{
    border-radius: 5px;
    border: none;
    padding: 5px;
    background-color: rgb(118, 225, 255);
    box-shadow: 1px 1px 4px black;
  }
  .admin-button.remove{
    background-color: rgb(255, 75, 75);
    margin-left: 10px;
  }

</style>