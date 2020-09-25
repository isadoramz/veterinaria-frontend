<template>
    <div>
        <div> 
            <h5 class="txt">
                {{ title }}
            </h5>
            <p class="txt">
                {{ txt }}
            </p>
        </div>
    </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../style.css'
export default {
name: 'Card',
props: {
    title: String,
    txt: String
  }
}
</script>

<style>

</style>