<template>
    <div class="h">
      <button @click="toggleImagen" class="toggle-button">{{ mostrarImagen ? 'Ocultar' : 'Mostrar' }} Imagen</button>
      <img v-if="mostrarImagen" 
           src="https://th.bing.com/th/id/OIP.hJF0n_2-zAhPGUiN5kIQ6wHaE-?w=1606&h=1080&rs=1&pid=ImgDetMain" 
           alt="Imagen condicional" 
           class="half-screen-image" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const mostrarImagen = ref(true);
  
  const toggleImagen = () => {
    mostrarImagen.value = !mostrarImagen.value;
  };
  </script>
  
  <style scoped>
  
  .toggle-button {
    position: relative;
    top: 2rem;
    left: 19rem;
    height: 3rem;
    width: 22rem;
    z-index: 1001; 
    padding: 0.5rem 1rem;
    background-color: #41b883; 
    color: #fff; 
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 2px solid rgb(0, 0, 0);

    
  }
  
  .toggle-button:hover {
    background-color: #34495e; 
    border: 2px solid rgb(255, 255, 255);
  }
  
  .half-screen-image {
    width: 100%; 
    height: 100vh; /* Ajusta según tus necesidades */
    position: fixed;
    top: 4rem; 
    right:  12rem;
    object-fit: contain; /* Cambiar de 'cover' a 'contain' */
    transform: translateX(50%);
    z-index: 999; 
    opacity: 0.5;
    }
  </style>
  