<template lang="pug">
zi-card.ex-attributes
  h2 Attributes
  slot
  zi-link(pure :href="editLink").link Edit this page on github
</template>

<script>
export default {
  props: ['edit-link'],
}
</script>

<style lang="stylus" scoped>
.ex-attributes
  margin-top 60px
  margin-bottom 60px
  padding 20px 10px

  h2
    margin 0 0 20px 0

.link
  margin-top 30px
</style>
