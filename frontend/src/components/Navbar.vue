<script lang="ts">
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
  components:{
    Offcanvas,
  },

  data() {
    return {
      router: useRouter(),
      currentUser: JSON.parse(localStorage.getItem("currentUser") || "null")
    }
  },

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
    
    <div id="pushImg"><Offcanvas/></div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <img id="menu" src="../assets/menu.png" alt="..." data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas" v-if="showOffcanvas!==false"/>
      <div class="container px-4 px-lg-5">
        <router-link to="/">
          <img id="logo" class="navbar-brand" src="../assets/Logo.png" alt="..." style="cursor: pointer"/>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="this.props.showSearch !== false">
              <router-link to="/search">
                <Search/>
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
            <li class="nav-item" v-if="this.props.showCart !== false">
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

  #navbarResponsive{
    margin-right: 30px;
  }
</style>
