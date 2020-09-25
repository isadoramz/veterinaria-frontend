<template>
  <div>
    <div class="container">
      <div>
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="cadastro-txt">
        <Welcome msg="Cadastro de Pet" txt="Cadastre os dados do pet aqui"></Welcome>
      </div>
      <div class="div-input ">
        <form>
            <div class="form-row">
                <div class="col-7">
                    <label for="nome">Nome</label>
                    <input type="nome" class="form-control" id="nome">
                </div>
                <div class="col-3">
                    <label for="tipo">Tipo</label>
                    <select id="tipo" class="form-control">
                        <option selected>Selecione</option>
                        <option>Cachorro</option>
                    </select>
                </div>
                <div class="col-3">
                    <label for="raça">Raça</label>
                    <select id="raça" class="form-control">
                        <option selected>Selecione</option>
                        <option>SRD</option>
                    </select>
                </div>
                <div class="col-7 form-group">
                    <label for="idade">Idade</label>
                    <input type="idade" class="form-control" id="idade">
                </div> 
            </div>
            <button type="submit" class="btn-cadastro btn">Salvar</button>
        </form>
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
