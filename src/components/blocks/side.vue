<template lang="pug">
.ex-side
  template(v-for='group in sides')
    p.zi-title {{ group.name }}
    ul(v-if='group.children && group.children.length')
      li(v-for='item in group.children' v-if='item.name') #[router-link(:to='`/docs/${item.name}`') {{ item.name }}]
</template>

<script>
import docs from '#/docs/index'

export default {
  name: 'ex-side',

  data: () => ({
    sides: [],
  }),

  mounted() {
    this.sides = this.parseDocs(docs)
  },

  methods: {
    parseDocs(list) {
      return list.map(item => {
        if (item.default) return Object.assign({}, item.default, {
          name: this.pickName(item.default),
        })
        if (item.children) return Object.assign({}, item, {
          children: this.parseDocs(item.children),
        })
        return { name: null }
      })
        .filter(r => r.name)
    },

    pickName(docModule) {
      if (!docModule.name) return null
      return docModule.name
        .replace('docs/', '')
        .replace('.md', '')
    },
  },
}
</script>

<style scoped lang="stylus">
.ex-side
  position fixed
  width 185px
  overflow-y auto
  overflow-x hidden
  height calc(100% - 10vh)
  -ms-overflow-style none

  &::-webkit-scrollbar
    width: 0 !important
    display none !important

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
