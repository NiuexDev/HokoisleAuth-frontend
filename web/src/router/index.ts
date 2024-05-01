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
    },
    {
      path: "/user",
      component: () => import("@v/user/Layout.vue")
    },
    {
      path: "/user/welcome",
      component: () => import("@v/user/Welcome.vue")
    }
  ]
})

export default router
