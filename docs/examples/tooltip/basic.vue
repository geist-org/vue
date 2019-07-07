<template lang="pug">
div.example
  div
    zi-tooltip(content="tooltip content" placement="top")
      span Top
  div
    zi-tooltip(content="tooltip content" placement="left")
      span Left
  div
    zi-tooltip(content="tooltip content" placement="right")
      span Right
  div
    zi-tooltip(content="tooltip content" placement="bottom")
      span Bottom
</template>

<script>
export default {
  name: 'ex-tooltip-basic',
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
