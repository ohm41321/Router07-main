import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProdID from '../components/ProdID.vue'
import orderList from '../views/orderList.vue'
import cart from '../views/cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/coffee',
      name: 'allproduct',
      component: ProductDetail
    },
    {
      path: '/coffee/:id',
      name: 'coffee',
      component: ProdID
    },
    {
      path: '/cart',
      name: 'cartlist',
      component: cart
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: orderList
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
