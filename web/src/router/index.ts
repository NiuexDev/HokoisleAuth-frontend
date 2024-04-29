import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: import('@v/HomeView.vue')
    },
    {
      path: '/auth',
      component: () => import('@v/auth/Layout.vue'),
      children: [
        {
          path: 'login',
          component: () => import('@v/auth/Login.vue')
        },
        {
          path: 'register',
          component: () => import('@v/auth/Register.vue')
        }
      ]
    }
  ]
})

export default router
