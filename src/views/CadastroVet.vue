

<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="div-txt col-4">
        <Welcome msg="Cadastro de Veterinário" txt="Cadastre os dados do veterinário aqui:"></Welcome>
        <div class="div-input">
          <form>
              <div class="form-row">
                  <div class="col-6">
                      <label for="nome">Nome</label>
                      <input v-model="veterinario.nome" :maxlength="100" type="nome" class="form-control" id="nome">
                      <p v-if="faltaNome">O campo nome é obrigatório</p>
                  </div>
                  <div class="col-6">
                      <label for="cpf">CPF</label>
                      <the-mask :minlength="11" v-model="veterinario.cpf" type="cpf" class="form-control" :mask="['###.###.###-##']" />
                      <p v-if="faltaCPF">O campo CPF é obrigatório, único e precisa ter 11 caracteres</p>
                  </div>
                  <div class="col-4">
                      <label for="dataNascimento">Data de Nascimento</label>
                      <input v-model="veterinario.dataNascimento" type="date" class="form-control" id="nome">
                      <p v-if="faltaNascimento">O campo nascimento é obrigatório</p>
                  </div>
                  <button @click="salvaDadosVeterinario" type="button" class="btn-cadastro btn">Salvar</button>
              </div>
          </form>
        </div> 
          
      </div>  
    </div> 
  </div>
</template>

<script>
import moment from 'moment'
import {TheMask} from 'vue-the-mask'
import Welcome from '../components/Welcome'
export default {
name: 'CadastroVet',
    components: {
    Welcome,
    TheMask
    
    },
    data() {
      return {
        veterinario: {
          nome: "",
          cpf: "",
          dataNascimento: "",
        },
        
        faltaNome: false,
        faltaCPF: false,
        faltaNascimento: false,
      }
    },
    mounted() {
      if(this.$route.params.id != undefined) {
        fetch("http://localhost:8080/veterinarios/" + this.$route.params.id, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          if(response.ok) return response.json();
        })
        .then((veterinarioApi) => {
          this.veterinario = veterinarioApi;
        })
      }
    },
    methods: {

      salvaDadosVeterinario() {
        if(this.veterinario.nome == "") {
          this.faltaNome = true;
        } 
        
        if(this.veterinario.cpf == "" || this.veterinario.cpf.length < 11) {
          this.faltaCPF = true; 
        }
        
        if(this.veterinario.dataNascimento == "") {
          this.faltaNascimento = true;
        } 
        

        if(this.veterinario.nome != "" && this.veterinario.cpf != "" && this.veterinario.cpf.length == 11 && this.veterinario.dataNascimento != "") {
          let veterinario = {
            nome: this.veterinario.nome,
            cpf: this.veterinario.cpf,
            dataNascimento: moment(this.veterinario.dataNascimento).toISOString()
        }

        let parametroId = "";
        let metodoHTTP = "";
        if(this.$route.params.id != undefined) {
          metodoHTTP = "PUT";
          parametroId = this.$route.params.id;
        } else {
          metodoHTTP = "POST";
        }

          fetch("http://localhost:8080/veterinarios/" + parametroId, {
            method: metodoHTTP,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(veterinario),
          }).then((resultado) => {
            if(resultado.ok) this.$router.push({ path: "/" });
          })
        }
      }
    }
}

</script>