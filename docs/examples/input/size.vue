<template lang="pug">
div
  zi-input(placeholder="The Evil Rabbit" size="mini" :class="$style.demo")
  zi-input(placeholder="The Evil Rabbit" size="small" :class="$style.demo")
  zi-input(placeholder="The Evil Rabbit" :class="$style.demo")
  zi-input(placeholder="The Evil Rabbit" size="big")
</template>

<script>
export default {
  name: 'ex-input-size',
}
</script>

<style module lang="stylus">
.demo
  display block
  margin-bottom 10px
</style>
