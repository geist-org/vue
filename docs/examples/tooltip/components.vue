<template lang="pug">
.example
  div
    zi-tooltip(content="hello, zeit-ui/vue")
      zi-button(size="small" auto) button
  div
    zi-tooltip(content="hello, zeit-ui/vue")
      zi-spinner
  div
    zi-tooltip(content="hello, zeit-ui/vue")
      zi-code yarn add @zeit-ui/vue
</template>

<script>
export default {
  name: 'ex-tooltip-components',
}
</script>

<style lang="stylus" scoped>
.example
  display flex

  > div
    display flex
    flex 1
    justify-content center
    align-items center
</style>
