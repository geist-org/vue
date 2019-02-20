<template lang="pug">
.ex-side
  template(v-for='group in sides')
    p.zi-title {{ group.name }}
    ul(v-if='group.children && group.children.length')
      li(v-for='item in group.children' v-if='item.docName')
        |#[router-link(:to='`/docs/${item.docName}`') {{ item.docName }}]
</template>

<script>
import docs from '#/docs/index'
const SIDE_WEIGHT = {
  start: 1,
  components: 2,
}

export default {
  name: 'ex-side',

  data: () => ({
    sides: [],
  }),

  mounted() {
    this.sides = this.parseDocs(docs)
  },

  methods: {
    parseDocs(docs) {
      const group = docs
        .map(docModule => docModule.default)
        .reduce((group, next) => {
          group[next.groupName] = [...(group[next.groupName] || []), next]
          return group
        }, {})
      return Object.keys(group)
        .sort((a, b) => SIDE_WEIGHT[a] - SIDE_WEIGHT[b])
        .map(name => ({
          name,
          children: group[name],
        }))
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
  text-transform capitalize
  height calc(100% - 10vh)
  -ms-overflow-style none

  a
    color black
    font-size 14px

  li
    list-style none
    &:before
      content ''

  ul
    margin-left 0

  >ul
    margin-bottom 3rem

.router-link-active
  font-weight bold
</style>
