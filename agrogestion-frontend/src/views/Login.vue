<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <form @submit.prevent="submit" class="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4">
      <h2 class="text-2xl font-bold text-center text-green-600">Iniciar Sesión</h2>
      <input v-model="usuario" placeholder="Usuario" class="input" />
      <input v-model="contrasena" type="password" placeholder="Contraseña" class="input" />
      <button type="submit" class="btn bg-green-600 text-white">Ingresar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const usuario = ref('')
const contrasena = ref('')
const auth = useAuthStore()

function submit() {
  auth.login(usuario.value, contrasena.value)
}
</script>

<style scoped>
.input {
  @apply w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400;
}
.btn {
  @apply w-full py-2 rounded font-semibold hover:bg-green-700 transition;
}
</style>
