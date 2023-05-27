<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from "axios"
  import OneUser from './OneUser.vue';
  import { toRaw } from '@vue/reactivity';

  interface UserData {
    _id: string;
    email: string;
    fName: string;
    lName: string;
    isAdmin: boolean;
  }

  export default defineComponent({
    name: "Admin",
    components: { OneUser },
    data(){
      return {
        users: [] as UserData[]
      }
    },
    mounted(){
      var rawUsers: UserData[] = toRaw(this.users)
      axios.get("http://localhost:3001/user/getAll")
      .then(result => {rawUsers = result.data; console.log(rawUsers)})
    }
  })
</script>

<template>

<div id="admin-parent">
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
      <OneUser v-for="(e,i) in rawUsers" :key="i" :id="e._id" :email="e.email" :fName="e.fName" :lName="e.lName" :isAdmin="e.isAdmin"/>
    </div>
  </table>
</div>

</template>

<style scoped>

  #admin-parent{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column-container{
    padding: 90px
  }

</style>