<template lang="pug">
figure
  main(:style="{ width: width || 'auto' }")
    img(:src="src" draggable="false")
    p(v-if="caption") {{ caption }}
</template>

<script>
export default {
  name: 'zi-image',

  props: {
    src: String,
    width: [String, Number],
    caption: String,
  },
}
</script>

<style lang="stylus">
figure
  display block
  text-align center
  margin 0

  main
    max-width 100%
    margin 0 auto
    display flex
    flex-direction column

  img
    max-width 100%

  p
    margin-top 1.25rem
    font-size 0.75rem
    color var(--accents-5)
</style>
