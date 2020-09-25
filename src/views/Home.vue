<template>
  <div>
    <div class="container">
      <div>
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="welcome-txt">
          <Welcome msg="Bem vindo ao Vue Pet Clinic" txt="A maneira mais fácil e reativa de cadastrar seus pets na web!"></Welcome>
      </div>
      <div class="card leftCard">
          <div>
            <button @click="irParaPesquisaDePet" href="#" title="" class="btn-styled btn">
            </button>
            <Card class="position" title="Pesquisa" txt="Encontre seu pet pesquisando por um nome"></Card>
          </div>  
      </div>
      <div class="card rightCard">
        <div>
            <button @click="irParaCadastroDePet" href="#" title="" class="btn-styled btn">
            </button>
            <Card class="position" title="Novo Cadastro" txt="Não encontrou um pet? Você pode cadastrar um novo pet aqui!"></Card>
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
        this.$router.push({ path: "/pesquisa"})
        },
        irParaCadastroDePet() {
        this.$router.push({ path: "/cadastro"})
        }
    }
}
</script>
<style>

</style>