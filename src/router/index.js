import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pesquisa from '../views/Pesquisa.vue'
import Cadastro from '../views/Cadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pesquisa',
    name: 'Pesquisa',
    component: Pesquisa
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
