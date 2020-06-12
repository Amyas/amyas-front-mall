import Vue from 'vue'
import VueRouter from 'vue-router'

/* 首页 */const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
/* 分类 */const Category = () => import(/* webpackChunkName: "category" */ '@/views/Category')
/* 购物车 */const Cart = () => import(/* webpackChunkName: "cart" */ '@/views/Cart')
/* 我的 */const User = () => import(/* webpackChunkName: "user" */ '@/views/User')
/* 商品详情 */const Goods = () => import(/* webpackChunkName: "goods" */ '@/views/Goods')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      navbar: true
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      navbar: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      navbar: true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      navbar: true
    }
  },
  {
    path: '/goods/:id',
    name: 'Goods',
    component: Goods
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
