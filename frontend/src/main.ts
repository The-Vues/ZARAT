import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from "./components/home.vue"
import Login from "./components/Login.vue"
import SignUP from "./components/SignUP.vue"
import Cart from "./components/Cart.vue"
import Search from "./components/Search.vue"
import helps from "./components/helps.vue"
import Admin from "./components/Admin/Admin.vue"
import Clothes from "./components/Clothes.vue"

//routes that the app uses
const routes = [
  { path: "/", component: Home},
  { path: "/login", component: Login },
  { path: "/signup", component: SignUP },
  { path: "/cart", component: Cart },
  { path: "/search", component: Search },
  { path: "/help", component: helps },
  { path: "/admin", component: Admin },
  { path: "/clothes/:gender/:type", component: Clothes}
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
