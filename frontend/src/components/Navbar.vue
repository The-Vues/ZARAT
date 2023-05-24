<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { useRouter } from "vue-router"

import Offcanvas from "./Offcanvas.vue"
import Search from "./Search.vue"

interface NavbarProps {
  showSearch?: boolean
  showCart?: boolean
  showOffcanvas?: boolean
}

export default defineComponent({
  name: "Navbar",
  components: {
    Image,
    Offcanvas,
    Search,
  },
  props: {
    showSearch: {
      type: Boolean,
      default: true,
    },
    showCart: {
      type: Boolean,
      default: true,
    },
    showOffcanvas: {
      type: Boolean,
      default: true,
    },
  },
  setup(props: NavbarProps) {
    const router = useRouter()
    const currentUser = ref<any>(JSON.parse(localStorage.getItem("currentUser") || "null"))

    const logout = () => {
      localStorage.removeItem("currentUser")
    }

    watch(currentUser, (newValue) => {
      console.log(newValue)
    })

    const goToCart = () => {
      if (currentUser.value) {
        router.push("/cart")
      }
      else {
        router.push("/login")
      }
    }

    return {
      router,
      currentUser,
      logout,
      goToCart,
    }
  },
})
</script>

<template>
  <div>
    <Offcanvas/>
    <div id="pushImg"></div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <img id="menu" src="../assets/menu.png" alt="..." data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas" v-if="showOffcanvas !== false"/>
      <div class="container px-4 px-lg-5">
        <router-link to="/">
          <img id="logo" class="navbar-brand" src="../assets/Logo.png" alt="..." style="cursor: pointer"/>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="showSearch !== false">
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
            <li class="nav-item" v-if="showCart !== false">
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
