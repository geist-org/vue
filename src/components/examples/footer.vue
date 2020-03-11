<template lang="pug">
div.ex-attributes
  h3.title Attributes
  zi-card
    slot
  zi-link(:href="editLink").ex-footer-link Edit Page
</template>

<script>
export default {
  props: ['edit-link'],
}
</script>

<style lang="stylus" scoped>
.ex-attributes
  margin-top rem(70)
  margin-bottom rem(60)

.title
  text-transform uppercase
  font-size 1.2rem
  line-height 1
  margin-bottom rem(22)
</style>

<style lang="stylus">
+layout(xs)
  .ex-attributes .zi-card
    overflow scroll

    table
      display block
      overflow-x scroll

.ex-footer-link
  margin-top rem(10)
  float right
  color var(--accents-7)
  font-size .8rem
  text-transform uppercase

  .zi-link
    margin-bottom -3px
</style>
