import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Videos',
      name: 'Videos',
      component: () => import('../views/VideosView.vue')
    },
    {
      path: '/Imagenes',
      name: 'Imagenes',
      component: () => import('../views/Imagenview.vue')
    },
    {
      path: '/Series',
      name: 'Series',
      component: () => import('../views/SerieView.vue')
    },
    {
      path: '/Peliculas',
      name: 'Peliculas',
      component: () => import('../views/PeliculasView.vue')
    },
    {
      path: '/Animacion',
      name: 'Animacion',
      component: () => import('../views/AnimacionView.vue')
    },
    {
      path: '/Comedia',
      name: 'Comedia',
      component: () => import('../views/ComediaView.vue')
    }
  ]
})

export default router
