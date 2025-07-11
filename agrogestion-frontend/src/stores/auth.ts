import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || '')
  const router = useRouter()

  const isAuthenticated = computed(() => !!token.value)

  function login(usuario: string, contraseña: string) {
    if (usuario === 'admin' && contraseña === 'admin') {
      token.value = 'token_simulado'
      localStorage.setItem('token', token.value)
      router.push('/dashboard')
    } else {
      alert('Credenciales inválidas')
    }
  }

  function logout() {
    token.value = ''
    localStorage.removeItem('token')
    router.push('/')
  }

  return { token, isAuthenticated, login, logout }
})
