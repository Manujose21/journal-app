import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import daybookLayaout from '@/modules/daybook/router'
import authLayout from '@/modules/auth/router'
import isAuthenticationGuard from './authGuard'
const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/daybook',
    beforeEnter: [ isAuthenticationGuard ],
    ...daybookLayaout
  },
  {
    path: '/auth',
    ...authLayout
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
