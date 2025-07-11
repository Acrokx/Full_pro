<template>
  <div class="min-h-screen grid grid-cols-[200px_1fr]">
    <aside class="bg-green-700 text-white p-4">
      <h2 class="text-xl font-semibold mb-4">AgroGestión</h2>
      <ul class="space-y-2">
        <li><router-link to="/dashboard" class="hover:underline">Inicio</router-link></li>
        <li><router-link to="/dashboard/fincas" class="hover:underline">Fincas</router-link></li>
        <li><router-link to="/dashboard/animales" class="hover:underline">Animales</router-link></li>
        <li><router-link to="/dashboard/inseminaciones" class="hover:underline">Inseminaciones</router-link></li>
        <li><button @click="logout" class="mt-4 bg-red-500 text-white px-3 py-1 rounded">Cerrar sesión</button></li>
      </ul>
    </aside>
    <main class="p-6 bg-gray-100">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/')
}
</script>
