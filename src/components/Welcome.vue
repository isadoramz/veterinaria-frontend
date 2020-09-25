<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>{{ txt }}</p>
    </div>

</template>

<script>
export default {
name: 'BemVindo',
  props: {
    msg: String,
    txt: String
  }
}
</script>

<style>
</style>