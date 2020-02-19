import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Article from '../views/Article'
import CreateArticle from '../views/CreateArticle'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/article/create',
    component: CreateArticle
  },
  {
    path: '/article/:id',
    component: Article
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
