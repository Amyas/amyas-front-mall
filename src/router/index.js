import Vue from 'vue'
import VueRouter from 'vue-router'

/* 首页 */const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
/* 分类 */const Category = () => import(/* webpackChunkName: "category" */ '@/views/Category')
/* 购物车 */const Cart = () => import(/* webpackChunkName: "cart" */ '@/views/Cart')
/* 我的 */const User = () => import(/* webpackChunkName: "user" */ '@/views/User')

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
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
