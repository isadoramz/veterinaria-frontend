<template>
  <div>
    <div class="container">
      <div>
        <img class="vue-dog" alt="VueDog" src="../assets/vue-dog.jpg">
      </div>
      <div class="pesquisa-txt">
        <Welcome msg="Pesquisa de Pet" txt="Encontre um pet pesquisando por nome"></Welcome>
      </div>
      <div class="div-input ">
        <form>
          <div class="form-group">
                <label for="nome">Insira o nome do pet</label>
                <input type="nome" class="form-control" id="raça"/>
          </div>
          <button type="submit" class="btn-input btn">Pesquisar</button>
        </form>
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
}
</script>
