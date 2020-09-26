<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="pesquisa-txt col-4">
        <Welcome msg="Pesquisa de Pet" txt="Encontre um pet pesquisando por nome"></Welcome>
        <div class="div-input">
        <form>
          <div>
            <label for="nome">Insira o nome do pet</label>
            <input type="nome" class="form-control" id="raça"/>
          </div>
        </form>
      </div>
      </div>
      <div class="col-4">
            <button @click="getListaCachorros" type="button" class="btn-input btn">Pesquisar</button>
      </div>
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
      resultadoOperacaoApi: [],
    };
    },
    mounted() {
    fetch("http://localhost:8080/cachorros", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
      })
      .then((cachorros) => {
        this.cachorros = cachorros;
      });
  },
    methods: {
      getListaCachorros() {
        fetch(
          "http://localhost:8080/cachorros", 
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

        .then((jsonCachorros) => {
          this.resultadoOperacaoApi = jsonCachorros;
          console.log(jsonCachorros);
        })
      }
    }
}
</script>
