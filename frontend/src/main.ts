import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const routes = [
  { path: "/", component: /* home component here*/},
  { path: "/login", component: /* login component here*/ },
  { path: "/signup", component: /* sign up component here */},
  { path: "/cart", component: /* cart component here */}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
