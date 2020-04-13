import Vue from 'vue'
import VueRouter from 'vue-router'

/* 首页 */const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
/* 分类 */const Category = () => import(/* webpackChunkName: "category" */ '@/views/Category')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
