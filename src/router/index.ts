import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Arg from '../views/Arg.vue'
import Test1 from '../views/Test1.vue'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Arg',
    component: Arg
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Test1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
