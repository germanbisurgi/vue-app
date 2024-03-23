import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './views/PageHome.vue'
import About from './views/PageAbout.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
