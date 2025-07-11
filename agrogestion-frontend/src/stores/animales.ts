import { defineStore } from 'pinia'
import type { Animal } from '@/modules/animales/types'
import {
  obtenerAnimales,
  crearAnimal,
  actualizarAnimal,
  eliminarAnimal,
} from '@/modules/animales/apiAnimales'

export const useAnimalesStore = defineStore('animales', {
  state: () => ({
    animales: [] as Animal[],
    cargando: false,
  }),
  getters: {
    porNombre: (state) => (texto: string) =>
      state.animales.filter((a) =>
        a.nombre.toLowerCase().includes(texto.toLowerCase())
      ),
  },
  actions: {
    async cargar() {
      this.cargando = true
      this.animales = await obtenerAnimales()
      this.cargando = false
    },
    async crear(data: Omit<Animal, 'id'>) {
      const nuevo = await crearAnimal(data)
      this.animales.push(nuevo)
    },
    async actualizar(data: Animal) {
      await actualizarAnimal(data)
      const i = this.animales.findIndex((a) => a.id === data.id)
      if (i !== -1) this.animales[i] = data
    },
    async borrar(id: number) {
      await eliminarAnimal(id)
      this.animales = this.animales.filter((a) => a.id !== id)
    },
  },
})
