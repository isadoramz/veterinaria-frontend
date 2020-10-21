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
                      <input v-model="veterinario.nome" type="nome" class="form-control" id="nome">
                      <p v-if="faltaNome">O campo nome é obrigatório</p>
                  </div>
                  <div class="col-6">
                      <label for="cpf">CPF</label>
                      <input v-model="veterinario.cpf" type="cpf" class="form-control" id="nome">
                      <p v-if="faltaCPF">O campo CPF é obrigatório</p>
                  </div>
                  <div class="col-4">
                      <label for="nascimento">Data de Nascimento</label>
                      <input v-model="veterinario.nascimento" type="date" class="form-control" id="nome">
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
import Welcome from '../components/Welcome'
export default {
name: 'CadastroVet',
    components: {
    Welcome
    },
    data() {
      return {
        veterinario: {
          nome: "",
          cpf: "",
          nascimento: "",
        },
        
        faltaNome: false,
        faltaCPF: false,
        faltaNascimento: false,
      }
    },
    mounted() {
      console.log(this.$route.params.id);
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
        
        if(this.veterinario.cpf == "") {
          this.faltaCPF = true; 
        }
        
        if(this.veterinario.nascimento == "") {
          this.faltaNascimento = true;
        } 
        

        if(this.veterinario.nome != "" && this.veterinario.cpf != "" && this.veterinario.nascimento != "") {
          let veterinario = {
            nome: this.veterinario.nome,
            cpf: this.veterinario.cpf,
            nascimento: this.veterinario.nascimento
        }

        let parametroId = "";
        let metodoHTTP = "";
        if(this.$route.params.id != undefined) {
          metodoHTTP = "PUT";
          parametroId = this.$route.params.id;
        } else {
          metodoHTTP = "POST";
        }

          console.log(veterinario);
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