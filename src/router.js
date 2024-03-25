import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './views/AppHome.vue'
import About from './views/AppAbout.vue'
import DataPrivacy from './views/AppDataPrivacy.vue'

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
  },
  {
    path: '/data-provacy',
    name: 'Data Privacy',
    component: DataPrivacy,
    meta: {
      footer: true
    }
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
