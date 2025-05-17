import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQVIEW.vue'),
    },
    {
      path: '/:id',
      name: 'detaile',
      component: () => import('../views/Detai.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
    },
  ],
})

export default router
