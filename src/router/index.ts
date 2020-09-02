import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Arg from '../views/Arg.vue'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Arg',
    component: Arg
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
