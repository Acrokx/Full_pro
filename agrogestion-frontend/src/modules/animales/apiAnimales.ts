import type { Animal } from './types'

const BASE_URL = 'http://localhost:8000/api/animales/'

export async function obtenerAnimales(): Promise<Animal[]> {
  const res = await fetch(BASE_URL)
  return await res.json()
}

export async function crearAnimal(data: Omit<Animal, 'id'>): Promise<Animal> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export async function actualizarAnimal(data: Animal): Promise<void> {
  await fetch(`${BASE_URL}${data.id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

export async function eliminarAnimal(id: number): Promise<void> {
  await fetch(`${BASE_URL}${id}/`, { method: 'DELETE' })
}
