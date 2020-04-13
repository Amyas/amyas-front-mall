import Vue from 'vue'
import VueRouter from 'vue-router'

/* 个人中心 */const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
