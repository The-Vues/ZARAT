<script lang="ts">
<<<<<<< HEAD
import { defineComponent, defineProps } from "vue"
import { useRouter } from "vue-router"

import Offcanvas from "./Offcanvas.vue"
import Search from "./Search.vue"

interface Props{
  showSearch?: boolean
  showCart?: boolean
  showOffcanvas?: boolean
}

const props: Props = defineProps({
  showSearch: { type: Boolean },
  showCart: { type: Boolean },
  showOffcanvas: { type: Boolean }
})

export default defineComponent({
  name: "Navbar",
=======
import { defineComponent } from "vue"
import { useRouter } from "vue-router"

import Offcanvas from "./Offcanvas.vue"
import MiniSearch from "./MiniSearch.vue"

export default defineComponent({
  name: "Navbar",
  components: { MiniSearch, Offcanvas },
  props: {
    showSearch:{
      type: Boolean
    },
    showCart:{
      type: Boolean
    },
    showOffcanvas: {
      type: Boolean
    }
  },
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155

  data() {
    return {
      router: useRouter(),
<<<<<<< HEAD
      currentUser: JSON.parse(localStorage.getItem("currentUser") || "null")
    }
  },
=======
      currentUser: JSON.parse(localStorage.getItem("currentUser"))
    }
  },
  mounted(){
      console.log(this.showSearch)
  },
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155

  methods: {
    logout(){
      localStorage.removeItem("currentUser")
    },

    goToCart(){
      if (this.currentUser.value) {
        this.$router.push("/cart")
      }
      else {
        this.$router.push("/login")
      }
    }
  }
})
</script>

<template>
  <div>
<<<<<<< HEAD
    <!-- <Offcanvas/> -->
    <div id="pushImg"></div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <img id="menu" src="../assets/menu.png" alt="..." data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas" v-if="showOffcanvas !== false"/>
      <div class="container px-4 px-lg-5">
        <router-link to="/">
          <img id="logo" class="navbar-brand" src="../assets/Logo.png" alt="..." style="cursor: pointer"/>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="this.props.showSearch !== false">
              <router-link to="/search">
                <Search/>
=======
    <div id="pushImg"></div>
    <Offcanvas/>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <img id="menu" src="../assets/menu.png" alt="..." data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas" v-if="this.showOffcanvas!==false"/>
      <div class="container px-4 px-lg-5">
        <router-link to="/">
          <img id="logo" class="navbar-brand" src="../assets/logo2.png" alt="..." style="cursor: pointer"/>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/search">
                <MiniSearch/>
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
              </router-link>
            </li>
            <li class="nav-item" v-if="!currentUser">
              <router-link class="nav-link" to="/login">LOG IN</router-link>
            </li>
            <li class="nav-item" v-if="currentUser">
              <router-link class="nav-link" to="/" @click="logout">LOGOUT</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help">HELP</a>
            </li>
<<<<<<< HEAD
            <li class="nav-item" v-if="this.props.showCart !== false">
=======
            <li class="nav-item" v-if="this.showCart !== false">
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
              <div class="nav-link" @click="goToCart" style="cursor: pointer">
                <img id="bag" src="../assets/bag.png" alt=".."/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
=======
  #pushImg{
    height: 130px;
    background-color: white;
  }

>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
  #menu-button{
    cursor: pointer;
  }

  #menu{
    height: 25px;
    width: 25px;
    margin-left: 20px;
    margin-bottom: 60px;
    cursor: pointer;
  }

  #logo{
    color: transparent;
    width: 5.2cm;
    height: 3.2cm;
  }

  #bag{
    height: 25px;
    width: 25px;
  }

<<<<<<< HEAD
  #navbarResponsive{
=======
  .navbarResponsive{
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
    margin-right: 30px;
  }
</style>
