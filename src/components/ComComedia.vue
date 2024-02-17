<template>
  <div class="container">
    <div class="content">
      <div class="info">
        <h1>Bienvenido a la sección de Comedia</h1>
        <button @click="redirectToHome">¿Quieres regresar a Home?</button>
      </div>
      <!-- Agregar el componente ImagenCondicionada -->
      <div class="image">
        <ImagenCondicionalC />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ImagenCondicionalC from '@/components/ImagenCondicionalC.vue';


const router = useRouter();

const redirectToHome = () => {
  router.push({ path: '/' });
};
</script>

<style scoped>
.container {
  text-align: left;
  margin-right: 20rem;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  flex: 1;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: left;
}

.image {
  flex: 1;
  text-align: right;
}

button {
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  font-size: 1rem;
  background-color: #34495e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgba(0, 87, 179, 0.718);
}
</style>
