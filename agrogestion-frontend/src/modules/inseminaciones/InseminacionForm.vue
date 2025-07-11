<template>
  <form @submit.prevent="submit" class="bg-white p-6 rounded-xl shadow space-y-4">
    <div>
      <input v-model.number="local.animalId" type="number" placeholder="ID del animal" class="input" />
    </div>
    <div>
      <input v-model="local.fecha" type="date" class="input" />
    </div>
    <div>
      <input v-model="local.resultado" placeholder="Resultado" class="input" />
    </div>
    <div class="flex justify-end gap-3">
      <button type="submit" class="btn bg-purple-600 text-white hover:bg-purple-700">
        {{ inseminacion ? 'Actualizar' : 'Crear' }}
      </button>
      <button type="button" @click="$emit('cancelar')" class="btn bg-gray-300 hover:bg-gray-400">
        Cancelar
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { Inseminacion } from './types'

const props = defineProps<{ inseminacion?: Inseminacion }>()
const emit = defineEmits(['guardar', 'cancelar'])

const defaultState = () => ({ id: 0, animalId: 0, fecha: '', resultado: '' })
const local = reactive<Inseminacion>(defaultState())

watch(
  () => props.inseminacion,
  (i) => Object.assign(local, i ? { ...i } : defaultState()),
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
  @apply w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400;
}
.btn {
  @apply px-4 py-2 rounded font-semibold;
}
</style>
