import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ShoppingCard from '../views/ShoppingCard.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/product',
    name: 'product',
    component: Product    
  },

  {
    path: '/card',
    name: 'ShoppingCard',
    component: ShoppingCard
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  }

]

const router = new VueRouter({
  routes
})

export default router
