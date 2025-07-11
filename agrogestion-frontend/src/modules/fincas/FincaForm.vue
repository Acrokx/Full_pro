<template>
  <form @submit.prevent="submit" class="space-y-4 bg-white p-6 rounded-xl shadow-md">
    <!-- Nombre -->
    <div>
      <input v-model.trim="local.nombre" placeholder="Nombre de la finca" class="input" />
      <p v-if="errores.nombre" class="text-red-600 text-sm mt-1">{{ errores.nombre }}</p>
    </div>

    <!-- Ubicación -->
    <div>
      <input v-model.trim="local.ubicacion" placeholder="Ubicación" class="input" />
      <p v-if="errores.ubicacion" class="text-red-600 text-sm mt-1">{{ errores.ubicacion }}</p>
    </div>

    <!-- Hectáreas -->
    <div>
      <input
        v-model.number="local.hectareas"
        type="number"
        min="0"
        placeholder="Hectáreas"
        class="input"
      />
      <p v-if="errores.hectareas" class="text-red-600 text-sm mt-1">{{ errores.hectareas }}</p>
    </div>

    <!-- Botones -->
    <div class="flex justify-end gap-3 pt-4">
      <button type="submit" class="btn bg-blue-600 text-white hover:bg-blue-700 transition">
        {{ finca ? 'Actualizar' : 'Crear' }}
      </button>
      <button type="button" @click="$emit('cancelar')" class="btn bg-gray-300 hover:bg-gray-400">
        Cancelar
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { Finca } from './types'

const emit = defineEmits<{
  (e: 'guardar', payload: Partial<Finca>): void
  (e: 'cancelar'): void
}>()

const props = defineProps<{ finca?: Finca }>()

const defaultState = () => ({ id: 0, nombre: '', ubicacion: '', hectareas: 0 })
const local = reactive<Finca>(defaultState())
const errores = reactive<Record<string, string>>({})

watch(
  () => props.finca,
  (f) => Object.assign(local, f ? { ...f } : defaultState()),
  { immediate: true }
)

function validar() {
  errores.nombre = local.nombre ? '' : 'El nombre es obligatorio'
  errores.ubicacion = local.ubicacion ? '' : 'La ubicación es obligatoria'
  errores.hectareas =
    local.hectareas > 0 ? '' : 'Las hectáreas deben ser mayores a 0'
  return !Object.values(errores).some(Boolean)
}

function submit() {
  if (validar()) {
    const payload = { ...local }
    if (!payload.id) delete payload.id
    emit('guardar', payload)
  }
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
