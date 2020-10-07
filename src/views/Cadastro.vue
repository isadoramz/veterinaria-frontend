<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="div-txt col-4">
        <Welcome msg="Cadastro de Pet" txt="Cadastre os dados do pet aqui:"></Welcome>
        <div class="div-input">
          <form>
              <div class="form-row">
                  <div class="col-4">
                      <label for="nome">Nome</label>
                      <input v-model="cachorro.nome" type="nome" class="form-control" id="nome">
                      <p v-if="faltaNome">O campo nome é obrigatório</p>
                  </div>
                  <div class="col-4">
                      <label for="tipo">Tipo</label>
                      <select v-model="cachorro.tipo" id="tipo" class="form-control">
                          <option selected>Selecione</option>
                          <option>Cachorro</option>
                      </select>
                      <p v-if="faltaTipo">O campo tipo é obrigatório</p>
                  </div>
                  <div class="col-4">
                      <label for="raça">Raça</label>
                      <select v-model="cachorro.raca" id="raça" class="form-control">
                          <option selected>Selecione</option>
                          <option>SRD</option>
                      </select>
                      <p v-if="faltaRaca">O campo raça é obrigatório</p>
                  </div>
                  <div class="col-4 form-group">
                      <label for="idade">Idade</label>
                      <input v-model="cachorro.idade" type="number" class="form-control" id="idade" min="0" max="30">
                      <p v-if="faltaIdade">O campo idade é obrigatório</p>
                  </div> 
                  <button @click="salvaDadosCachorro" type="button" class="btn-cadastro btn">Salvar</button>
              </div>
          </form>
        </div> 
          
      </div>  
    </div> 
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
export default {
name: 'Cadastro',
    components: {
    Welcome
    },
    data() {
      return {
        cachorro: {
          nome: "",
          tipo: "",
          raca: "",
          idade: ""
        },
        
        faltaNome: false,
        faltaTipo: false,
        faltaRaca: false,
        faltaIdade: false
      }
    },
    mounted() {
      console.log(this.$route.params.id);
      if(this.$route.params.id != undefined) {
        fetch("http://localhost:8080/cachorros/" + this.$route.params.id, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          if(response.ok) return response.json();
        })
        .then((cachorroApi) => {
          this.cachorro = cachorroApi;
        })
      }
    },
    methods: {

      salvaOuEditaCachorro(){

      },

      salvaDadosCachorro() {
        if(this.cachorro.nome == "") {
          this.faltaNome = true;
        } 
        
        if(this.cachorro.tipo == "") {
          this.faltaTipo = true; 
        }
        
        if(this.cachorro.raca == "") {
          this.faltaRaca = true;
        } 
        
        if(this.cachorro.idade == "") {
          this.faltaIdade = true;
        }

        if(this.cachorro.nome != "" && this.cachorro.tipo != "" && this.cachorro.raca != "" && this.cachorro.idade != "" ) {
          let cachorro = {
            nome: this.cachorro.nome,
            raca: this.cachorro.raca,
            idade: this.cachorro.idade
        }

        let parametroId = "";
        let metodoHTTP = "";
        if(this.$route.params.id != undefined) {
          metodoHTTP = "PUT";
          parametroId = this.$route.params.id;
        } else {
          metodoHTTP = "POST";
        }

          console.log(cachorro);
          fetch("http://localhost:8080/cachorros/" + parametroId, {
            method: metodoHTTP,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cachorro),
          }).then((resultado) => {
            if(resultado.ok) this.$router.push({ path: "/" });
          })
        }
      }
    }
}

</script>
