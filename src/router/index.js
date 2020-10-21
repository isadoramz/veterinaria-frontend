import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PesquisaPet from '../views/Pesquisa.vue'
import CadastroPet from '../views/Cadastro.vue'
import PesquisaVet from '../views/PesquisaVet.vue'
import CadastroVet from '../views/CadastroVet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pesquisaPet',
    name: 'Pesquisa',
    component: PesquisaPet
  },
  {
    path: '/pesquisaVet',
    name: 'Pesquisa',
    component: PesquisaVet
  },
  {
    path: '/cadastroPet/:id?',
    name: 'Cadastro',
    component: CadastroPet
  },
  {
    path: '/cadastroVet/:id?',
    name: 'CadastroVet',
    component: CadastroVet
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
