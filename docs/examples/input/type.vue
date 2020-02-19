<template lang="pug">
div(:class="$style.inputs")
  zi-input(value="The Evil Rabbit" type="success")
  zi-input(value="The Evil Rabbit" type="danger")
  zi-input(value="The Evil Rabbit" type="warning")
</template>

<script>
export default {
  name: 'ex-input-type',
}
</script>

<style scoped module lang="stylus">
.inputs
  >div
    margin-right 8px
</style>
