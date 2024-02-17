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
      path: '/login',
      name: 'Iniciar sesion',
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/registro',
      name: 'Registro',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/crud',
      name: 'Crud',
      component: () => import('../views/CrudView.vue')
    },
    {
      path: '/tarea',
      name: 'Tarea',
      component: () => import('../views/Tareaview.vue')
    }
  ]
})

export default router
