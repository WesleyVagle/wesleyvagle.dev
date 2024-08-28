import { createRouter, createWebHistory } from 'vue-router'
import Development from '@/views/Development.vue'
import GraphicDesign from '@/views/GraphicDesign.vue'
import CV from '../views/CV.vue'
import About from '../views/About.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CV',
      component: CV
    },
    {
      path: '/Development',
      name: 'Development',
      component: Development
    },
    {
      path: '/GraphicDesign',
      name: 'GraphicDesign',
      component: GraphicDesign
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router
