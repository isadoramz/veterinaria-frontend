<template>
  <div>
    <div class="container">
      <div>
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="welcome-txt">
          <Welcome msg="Bem vindo ao Vue Pet Clinic" txt="A maneira mais fácil e reativa de cadastrar seus pets na web!"></Welcome>
      </div>
      <div>
        <h2>Cachorros</h2>
      </div>
      <div class="card leftCard">
          <div>
            
            <button @click="irParaPesquisaDePet" href="#" title="" class="btn-styled btn"><i class="search fa fa-search"></i>
            </button>
            <Card title="Pesquisa" txt="Encontre seu pet pesquisando por um nome"></Card>
          </div>  
      </div>
      <div class="card rightCard">
        <div>
            <button @click="irParaCadastroDePet" href="#" title="" class="btn-styled btn"><i class="search fa fa-plus"></i>
            </button>
            <Card title="Novo Cadastro" txt="Não encontrou um pet? Você pode cadastrar um novo pet aqui!"></Card>
          </div>
      </div>
      <div>
          <h2>Veterinários</h2>
      </div>
      <div class="card leftCard">
            <div>
              <button @click="irParaPesquisaDeVet" href="#" title="" class="btn-styled btn"><i class="search fa fa-search"></i>
              </button>
              <Card title="Pesquisa" txt="Encontre um veterinário pesquisando por um nome"></Card>
            </div>  
      </div>
      <div class="card rightCard">
        <div>
            <button @click="irParaCadastroDeVet" href="#" title="" class="btn-styled btn"><i class="search fa fa-plus"></i>
            </button>
            <Card title="Novo Cadastro" txt="Não encontrou um veterinário? Você pode cadastrar um novo veterinário aqui!"></Card>
          </div>
      </div>
    
    </div> 
  </div>
</template>
<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../style.css'
import Card from '../components/Card'
import Welcome from '../components/Welcome'
export default {
    name: 'Home',
    components: {
    Card,
    Welcome
    },
    methods: {
        irParaPesquisaDePet() {
        this.$router.push({ path: "/pesquisaPet"})
        },

        irParaPesquisaDeVet() {
        this.$router.push({ path: "/pesquisaVet"})
        },

        irParaCadastroDePet() {
        this.$router.push({ path: "/cadastroPet"})
        },

        irParaCadastroDeVet() {
        this.$router.push({ path: "/cadastroVet"})
        }
    }
}
</script>
<style>

</style>