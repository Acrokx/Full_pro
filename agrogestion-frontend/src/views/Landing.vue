<template>
  <div class="flex flex-col items-center justify-center h-screen bg-green-50 text-center">
    <h1 class="text-4xl font-bold text-green-700 mb-6">Bienvenido a AgroGestión</h1>
    <p class="mb-10 text-gray-700">Administra fincas, animales e inseminaciones de forma eficiente.</p>
    <router-link
      to="/login"
      class="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
    >
      Iniciar Sesión
    </router-link>
  </div>
</template>
