<template>
  <header class="menu-header">
    <nav>
      <template v-for="(item, index) in listamenu" :key="item.path">
        <RouterLink :to="item.path" :class="{ 'unclickable': index % 2 !== 0 || index == 1, 'active': $route.path === item.path }">
          {{ item.name }}
        </RouterLink>
      </template>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from './router';


const listamenu = router.options.routes
</script>

<style scoped>
.menu-header {
  width: 100%;
  background-color: #34495e;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Ajustar z-index para asegurar que esté por encima de otros elementos */
}

nav {
  display: flex;
  padding: 0.5rem 10rem;
}

nav a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0;
  border-radius: 50px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #000000;
  color: #41b883;
}

.unclickable {
  pointer-events: none;
  color: #999;
}

.active {
  background-color: #41b883;
}
</style>
