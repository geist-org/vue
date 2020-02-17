<template lang="pug">
div(:class="$style.inputs")
  zi-input(type="danger" placeholder="danger input")
  zi-input(type="success" placeholder="success input")
  zi-input(type="warning" placeholder="warning input")
</template>

<script>
export default {
  name: 'ex-input-type',
}
</script>

<style module lang="stylus">
  .inputs
    >div
      margin-right 20px
</style>
