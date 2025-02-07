import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/pages/AppHome.vue'
import About from '@/pages/AppAbout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      navbar: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      navbar: true
    }
  }
]

const index = createRouter({
  history: createWebHistory(),
  routes
})

export default index
