import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings')
    },
    {
      path: '/profile/:id?',
      name: 'profile',
      component: () => import('@/views/Profile')
    },
    {
      path: '/editor/:id?',
      name: 'editor',
      component: () => import('@/views/Editor')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/views/Article')
    }
  ]
})
