<template lang="pug">
.ex-side
  template(v-for='group in sides')
    p.zi-label {{ group.name }}
    ul(v-if='group.children && group.children.length')
      li(v-for='item in group.children' v-if='item.name') #[a(:href='`#${item.name}`') {{ item.name }}]
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
      if (!docModule.__file) return null
      return docModule.__file.replace('docs/', '')
    },
  },
}
</script>

<style scoped lang="stylus">
.ex-side
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
