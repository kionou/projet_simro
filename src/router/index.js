import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin/Dashboard.vue'
import Accueil from '../views/Admin/Accueil.vue'
import User from '../views/Admin/User.vue'
// import store from '../store'


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
         component: User
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next)=>{
//   if ( to.name !== 'connexion' && store.getters.getSimro_admin  == 0 ){
//     next({
//       path: '/',
//       replace: true
//     })
//   } else {
//     next();
//   }
// })

export default router
