const API_URL = 'http://localhost:8000/api/fincas/' // Ajusta si tu endpoint es diferente

export async function obtenerFincas() {
  const res = await fetch(API_URL)
  return await res.json()
}

export async function crearFinca(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return await res.json()
}

export async function actualizarFinca(data) {
  await fetch(`${API_URL}${data.id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

export async function eliminarFinca(id) {
  await fetch(`${API_URL}${id}/`, { method: 'DELETE' })
}
