import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/AppHome.vue'
import About from '@/pages/AppAbout.vue'

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
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      navbar: true
    }
  }
]

const index = createRouter({
  history: createMemoryHistory(),
  routes
})

export default index
