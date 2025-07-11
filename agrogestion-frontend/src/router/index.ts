import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'fincas',
        component: () => import('@/modules/fincas/FincasPage.vue')
      },
      {
        path: 'animales',
        component: () => import('@/modules/animales/AnimalesPage.vue')
      },
      {
        path: 'inseminaciones',
        component: () => import('@/modules/inseminaciones/InseminacionesPage.vue')
      },
      {
        path: '',
        component: () => import('@/views/DashboardHome.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 Guard de autenticación
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
