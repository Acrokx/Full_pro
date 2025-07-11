import { defineStore } from 'pinia'
import type { Inseminacion } from '@/modules/inseminaciones/types'
import {
  obtenerInseminaciones,
  crearInseminacion,
  actualizarInseminacion,
  eliminarInseminacion,
} from '@/modules/inseminaciones/apiInseminaciones'

export const useInseminacionesStore = defineStore('inseminaciones', {
  state: () => ({
    inseminaciones: [] as Inseminacion[],
    cargando: false,
  }),
  getters: {
    porAnimalId: (state) => (id: number) =>
      state.inseminaciones.filter((i) => i.animalId === id),
  },
  actions: {
    async cargar() {
      this.cargando = true
      this.inseminaciones = await obtenerInseminaciones()
      this.cargando = false
    },
    async crear(data: Omit<Inseminacion, 'id'>) {
      const nueva = await crearInseminacion(data)
      this.inseminaciones.push(nueva)
    },
    async actualizar(data: Inseminacion) {
      await actualizarInseminacion(data)
      const i = this.inseminaciones.findIndex((i) => i.id === data.id)
      if (i !== -1) this.inseminaciones[i] = data
    },
    async borrar(id: number) {
      await eliminarInseminacion(id)
      this.inseminaciones = this.inseminaciones.filter((i) => i.id !== id)
    },
  },
})
