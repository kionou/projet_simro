import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin/Dashboard.vue'
import Accueil from '../views/Admin/Accueil.vue'
import Table from '../views/Admin/table.vue'


const routes = [
  {
    path: '/',
    name: 'connexion',
     component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children:[
      {
        path: '',
        name: 'admin-accueil',
         component: Accueil
      },
      {
        path: 'user',
        name: 'admin-user',
         component: Table
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
