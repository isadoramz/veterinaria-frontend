<template>
    <div>
        <label class="txt"> {{ txt }}</label>
        <input type="text" name="NomePet"/>
    </div>

</template>

<script>
export default {
name: 'Input',
  props: {
    txt: String,
  }
}
</script>

<style>
</style>