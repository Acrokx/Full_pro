import type { Inseminacion } from './types'

const BASE_URL = 'http://localhost:8000/api/inseminaciones/'

export async function obtenerInseminaciones(): Promise<Inseminacion[]> {
  const res = await fetch(BASE_URL)
  return await res.json()
}

export async function crearInseminacion(data: Omit<Inseminacion, 'id'>): Promise<Inseminacion> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export async function actualizarInseminacion(data: Inseminacion): Promise<void> {
  await fetch(`${BASE_URL}${data.id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

export async function eliminarInseminacion(id: number): Promise<void> {
  await fetch(`${BASE_URL}${id}/`, { method: 'DELETE' })
}
