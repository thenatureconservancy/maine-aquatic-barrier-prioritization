import { createRouter, createWebHashHistory } from 'vue-router'
import Analysis from '../views/Analysis.vue'

import Resources from '../views/Resources.vue'


const routes = [
  {
    path: '/',
    name: 'analysis',
    component: Analysis
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resources
  },
 
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
