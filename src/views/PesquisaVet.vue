<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="div-txt col-4">
        <Welcome msg="Pesquisa de Veterinário" txt="Encontre um veterinário pesquisando por nome!"></Welcome>
        <div class="div-input">
        <form>
          <div>
            <label for="nome">Insira o nome do veterinário:</label>
            <input v-model="filtroNomeVeterinario" type="nome" class="form-control" id="nome"/>
          </div>
        </form>
      </div>
      </div>
      <div class="col-4">
            <button @click="getListaVeterinarios" type="button" class="btn-input btn">Pesquisar</button>
      </div>
    </div>
    <div v-if="chamouVeterinario">
      <ul>
        <li class="card-pesquisa" v-for="veterinario in veterinarios" :key="veterinario">
          <div class="row">
            <div class="col-2">
              <p>Nome: {{veterinario.nome}}</p>
            </div>
            <div class="col-2">
              <p>CPF: {{veterinario.cpf}}</p>
            </div>
            <div class="col-2">
              <p>Nascimento: {{veterinario.nascimento}}</p>
            </div>
            <div class="col-2">
               <button @click="editaVeterinario(veterinario.id)" type="button" class="btn btn-card-pesquisa">Editar</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Welcome from '../components/Welcome'
export default {
    name: 'Pesquisa',
    components: {
    Welcome,
    },
    data() {
    return {
      veterinarios: {},
      filtroNomeVeterinario: "",
      chamouVeterinario: false,
    };
    },
    mounted() {
    },
    methods: {
      getListaVeterinarios() {

        let parametros = "";

        if (this.filtroNomeVeterinario != "") {
          this.chamouVeterinario = true;
          parametros = "?nome=" + this.filtroNomeVeterinario;
        }

        this.chamouVeterinario = true;

        fetch(
          "http://localhost:8080/veterinarios"  + parametros, 
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((resposta) => {
         if (resposta.ok) return resposta.json();
        })

        .then((json) => {
          this.veterinarios = json;
          console.log(json);
        })
      },

      editaVeterinario(id){
        this.$router.push({ name: "Cadastro", params: { id: id } });
      },
    },
};
</script>
