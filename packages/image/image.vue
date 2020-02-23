<template lang="pug">
figure
  main(:style="{ width: width || 'auto' }")
    img(:src="src" draggable="false" :class="{ shadow }")
    p(v-if="caption" :class="{ shadow }") {{ caption }}
</template>

<script>
export default {
  name: 'zi-image',

  props: {
    src: String,
    width: [String, Number],
    caption: String,
    shadow: Boolean,
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

    &.shadow
      box-shadow var(--shadow-large)
      border-radius var(--geist-radius)
      margin-bottom 1.25rem

  p
    margin-top 1.25rem
    font-size 0.75rem
    color var(--accents-5)

    &.shadow
      font-size 1rem
</style>
