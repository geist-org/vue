<template lang="pug">
div
  .ex-attributes
    h2 Attributes
    slot
  zi-link(pure :href="editLink").link Edit this page on github
</template>

<script>
export default {
  name: 'ex-footer',

  props: ['edit-link'],
}
</script>

<style lang="stylus" scoped>
.ex-attributes
  margin-top 60px
  margin-bottom 60px
  background-color #fff
  padding 20px

  h2
    margin 0 0 20px 0

.link
  margin-top 30px

.zi-dark-theme
  .ex-attributes
    background-color black
</style>
