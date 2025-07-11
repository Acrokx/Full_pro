<template>
  <form @submit.prevent="submit" class="bg-white p-6 rounded-xl shadow space-y-4">
    <div>
      <input v-model="local.nombre" placeholder="Nombre del animal" class="input" />
    </div>
    <div>
      <input v-model="local.especie" placeholder="Especie" class="input" />
    </div>
    <div>
      <input v-model.number="local.fincaId" type="number" placeholder="ID Finca" class="input" />
    </div>
    <div class="flex justify-end gap-3">
      <button type="submit" class="btn bg-blue-600 text-white hover:bg-blue-700">
        {{ animal ? 'Actualizar' : 'Crear' }}
      </button>
      <button type="button" @click="$emit('cancelar')" class="btn bg-gray-300 hover:bg-gray-400">
        Cancelar
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { Animal } from './types'

const props = defineProps<{ animal?: Animal }>()
const emit = defineEmits(['guardar', 'cancelar'])

const defaultState = () => ({ id: 0, nombre: '', especie: '', fincaId: 0 })
const local = reactive<Animal>(defaultState())

watch(
  () => props.animal,
  (a) => Object.assign(local, a ? { ...a } : defaultState()),
  { immediate: true }
)

function submit() {
  const payload = { ...local }
  if (!payload.id) delete payload.id
  emit('guardar', payload)
}
</script>

<style scoped>
.input {
  @apply w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400;
}
.btn {
  @apply px-4 py-2 rounded font-semibold;
}
</style>
