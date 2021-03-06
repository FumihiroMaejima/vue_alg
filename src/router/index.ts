import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Arg from '../views/Arg.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
import LinkedList from '../views/LinkedList.vue'
import DoubleLinkedList from '../views/DoubleLinkedList.vue'
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
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/list',
    name: 'LinkedList',
    component: LinkedList
  },
  {
    path: '/doublelist',
    name: 'DoubleLinkedList',
    component: DoubleLinkedList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
