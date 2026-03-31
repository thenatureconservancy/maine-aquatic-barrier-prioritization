import { createRouter, createWebHashHistory } from 'vue-router'
import Analysis from '../views/Analysis.vue'



const routes = [
  {
    path: '/',
    name: 'analysis',
    component: Analysis
  },

 
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
