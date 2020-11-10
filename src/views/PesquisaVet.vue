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
        <li class="card-pesquisa" v-for="veterinario in veterinarios" :key="veterinario.id">
          <div class="row">
            <div class="col-2">
              <p>Nome: {{veterinario.nome}}</p>
            </div>
            <div class="col-3">
              <p>CPF: <the-mask readonly :minlength="11" v-model="veterinario.cpf" type="cpf" class="mascaraCPF" :mask="['###.###.###-##']" /> </p>
            </div>
            <div class="col-2">
              <p>Idade: {{transformaNascimento(veterinario.dataNascimento)}} anos</p>
            </div>
            <div class="col-2">
               <button @click="editaVeterinario(veterinario.id)" type="button" class="btn btn-card-pesquisa">Editar</button>
            </div>
             <div class="col-2">
               <button @click="verPacientes(veterinario.id)" type="button" class="btn btn-card-pacientes">Ver pacientes</button>
            </div>
          </div>
          <div v-if="chamouPacientes">
            <p>Pacientes:</p>
            <ul>
                <li v-for="cachorro in pegaCachorrosDoVet(veterinario.id)" :key="cachorro.id">
                    <p>Nome do Pet: {{cachorro.nome}}</p>
                </li>
            </ul>
          </div> 
        </li> 
    </ul>
    </div>
  </div>
</template>

<script>

import moment from "moment"
import Welcome from '../components/Welcome'
import {TheMask} from 'vue-the-mask'
export default {
    name: 'Pesquisa',
    components: {
    Welcome,
    TheMask
    },
    data() {
    return {
      veterinarios: {},
      cachorros: {},
      cachorroDeCadaVet: [],
      filtroNomeVeterinario: "",
      chamouVeterinario: false,
      chamouPacientes: false,

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
        })
      },

      editaVeterinario(id){
        this.$router.push({ name: "CadastroVet", params: { id: id } });
      },

      verPacientes(idVet) {
          this.chamouPacientes = true;

          fetch(
          `http://localhost:8080/veterinarios/${idVet}/cachorros`  , 
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

        .then((cachorrosDoVeterinario) => {
          let associacaoVeterinarioPacientes = {
            idVet : idVet,
            cachorros: cachorrosDoVeterinario
          }

          this.cachorroDeCadaVet.push(associacaoVeterinarioPacientes);

        })
      },

      pegaCachorrosDoVet(idVet) {
        let cachorrosDoVeterinario = this.cachorroDeCadaVet.filter(associacao => {
          return associacao.idVet === idVet
        });

        if(cachorrosDoVeterinario.length > 0)
          return cachorrosDoVeterinario[0].cachorros;
        else return [];
      },

      transformaNascimento(data) {
       return moment().diff(moment(data), "years");
       
      }
    },
};
</script>
