<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="cadastro-txt col-4">
        <Welcome msg="Cadastro de Pet" txt="Cadastre os dados do pet aqui"></Welcome>
        <div class="div-input">
          <form>
              <div class="form-row">
                  <div class="col-4">
                      <label for="nome">Nome</label>
                      <input type="nome" class="form-control" id="nome">
                  </div>
                  <div class="col-4">
                      <label for="tipo">Tipo</label>
                      <select id="tipo" class="form-control">
                          <option selected>Selecione</option>
                          <option>Cachorro</option>
                      </select>
                  </div>
                  <div class="col-4">
                      <label for="raça">Raça</label>
                      <select id="raça" class="form-control">
                          <option selected>Selecione</option>
                          <option>SRD</option>
                      </select>
                  </div>
                  <div class="col-4 form-group">
                      <label for="idade">Idade</label>
                      <input type="idade" class="form-control" id="idade">
                  </div> 
                  <button type="submit" class="btn-cadastro btn">Salvar</button>
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
}
</script>
