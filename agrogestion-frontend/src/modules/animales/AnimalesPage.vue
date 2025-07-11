<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold text-blue-700 mb-4">Gestión de Animales</h2>

    <button @click="mostrarFormulario(null)" class="btn bg-blue-600 text-white mb-4">+ Nuevo Animal</button>

    <AnimalForm
      v-if="animalEditando"
      :animal="animalEditando"
      @guardar="guardarAnimal"
      @cancelar="animalEditando = null"
    />

    <table class="w-full border text-sm" v-if="!store.cargando">
      <thead class="bg-blue-100">
        <tr>
          <th class="p-2">Nombre</th>
          <th class="p-2">Especie</th>
          <th class="p-2">Finca</th>
          <th class="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="animal in store.animales" :key="animal.id" class="border-t">
          <td class="p-2">{{ animal.nombre }}</td>
          <td class="p-2">{{ animal.especie }}</td>
          <td class="p-2">{{ animal.fincaId }}</td>
          <td class="p-2">
            <button @click="mostrarFormulario(animal)" class="btn bg-yellow-500 text-white mr-2">Editar</button>
            <button @click="eliminarAnimal(animal.id)" class="btn bg-red-500 text-white">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnimalesStore } from '@/stores/animales'
import AnimalForm from './AnimalForm.vue'
import type { Animal } from './types'

const store = useAnimalesStore()
const animalEditando = ref<Animal | null>(null)

onMounted(() => store.cargar())

function mostrarFormulario(animal: Animal | null) {
  animalEditando.value = animal
}

async function guardarAnimal(payload: Partial<Animal>) {
  if (payload.id) await store.actualizar(payload as Animal)
  else await store.crear(payload)
  animalEditando.value = null
}

async function eliminarAnimal(id: number) {
  if (confirm('¿Eliminar animal?')) await store.borrar(id)
}
</script>

<style scoped>
.btn {
  @apply px-3 py-1 rounded text-sm font-medium hover:opacity-90;
}
</style>
