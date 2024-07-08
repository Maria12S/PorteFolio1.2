// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CompetenceView from '@/views/CompetenceView.vue'
import ProjetView from '@/views/ProjetView.vue'
import ContactView from '@/views/ContactView.vue'
import Error404 from '@/views/Error404View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/competences',
    name: 'competences',
    component: CompetenceView
  },
  {
    path: '/projets',
    name: 'projets',
    component: ProjetView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
