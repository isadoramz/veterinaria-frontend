<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="div-txt col-4">
        <Welcome msg="Pesquisa de Pet" txt="Encontre um pet pesquisando por nome!"></Welcome>
        <div class="div-input">
        <form>
          <div>
            <label for="nome">Insira o nome do pet:</label>
            <input v-model="filtroNomeCachorro" type="nome" class="form-control" id="nome"/>
          </div>
        </form>
      </div>
      </div>
      <div class="col-4">
            <button @click="getListaCachorros" type="button" class="btn-input btn">Pesquisar</button>
      </div>
    </div>
    <div v-if="chamouCachorro">
      <ul>
        <li class="card-pesquisa" v-for="cachorro in cachorros" :key="cachorro">
          <div class="row">
            <div class="col-2">
              <p>Nome: {{cachorro.nome}}</p>
            </div>
            <div class="col-2">
              <p>Tipo: {{cachorro.tipo}}</p>
            </div>
            <div class="col-2">
              <p>Idade: {{cachorro.idade}}</p>
            </div>
            <div class="col-2">
              <p>Raça: {{cachorro.raca}}</p>
            </div>
            <div class="col-2">
               <button @click="editaCachorro(cachorro.id)" type="button" class="btn btn-card-pesquisa">Editar</button>
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
      cachorros: {},
      filtroNomeCachorro: "",
      chamouCachorro: false,
    };
    },
    mounted() {
    },
    methods: {
      getListaCachorros() {

        let parametros = "";

        if (this.filtroNomeCachorro != "") {
          this.chamouCachorro = true;
          parametros = "?nome=" + this.filtroNomeCachorro;
        }

        this.chamouCachorro = true;

        fetch(
          "http://localhost:8080/cachorros"  + parametros, 
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
          this.cachorros = json;
        })
      },

      editaCachorro(id){
        this.$router.push({ name: "Cadastro", params: { id: id } });
      },
    },
};
</script>
