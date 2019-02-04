<template lang="pug">
.ex-side-content
  p.zi-label Start
  ul
    li(v-for='name in list') #[a(:href='`#${name}`') {{ name }}]
</template>

<script>
import docs from '#/docs/index'

export default {
  name: 'ex-side',

  data: () => ({
    list: [],
  }),

  mounted() {
    console.log(docs, typeof docs[0])
    // this.list = Object.keys(docs)
  },
}
</script>

<style module lang="stylus">
.ex-side-content
  position fixed
  width 170px

  a
    color black
    font-size 14px

  li
    list-style none
    &:before
      content ''

  ul
    margin-left 0
</style>
