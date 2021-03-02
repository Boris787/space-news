import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news', // set route
    name: 'News',
    component: News // set to redirect to the according page / views
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
