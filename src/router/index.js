import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PricingView from '@/views/PricingView.vue'
import FAQView from '@/views/FAQView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView
    }
  ]
})

export default router
