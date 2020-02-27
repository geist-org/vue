<template lang="pug">
.ex-side(:class="{ 'active': isActiveMenu }")
  .bar
    sliders.bar-toggle(@click="toggleMenu")
    span.bar-title @zeit-ui/vue
  .bar-bg(:class="{ 'active': isActiveMenu }" @click="closeMenu")
  ex-widgets
  template(v-for='group in sides')
    p.zi-title {{ group.name }}
    ul(v-if='group.children && group.children.length' @click="childEvent")
      li(v-for='item in group.children' v-if='item.docName')
        | #[router-link.component(:to='`/docs/${item.docName}`') {{ item.docName }}]
</template>

<script>
import sliders from '@zeit-ui/vue-icons/packages/sliders'
import docs from '#/docs/index'

const SIDE_WEIGHT = {
  'start': 1,
  'getting-started': 2,
  'customization': 3,
  'components': 5,
}

const DOC_WEIGHT = {
  introduction: 1,
  installation: 2,

  themes: 5,
  colors: 8,
  typography: 10,
  icons: 12,
}

export default {
  components: { sliders },

  data: () => ({
    sides: [],
    isActiveMenu: false,
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
        .map(name => {
          const children = group[name]
            .sort((a, b) => DOC_WEIGHT[a.docName] - DOC_WEIGHT[b.docName])
          return {
            name,
            children,
          }
        })
    },

    toggleMenu() {
      this.isActiveMenu = !this.isActiveMenu
    },

    closeMenu() {
      this.isActiveMenu = false
    },

    childEvent(event) {
      if (!this.isActiveMenu) return
      if (`${event.target.nodeName}`.toUpperCase() !== 'A') return

      // not support matchMedia
      if (!window.matchMedia) return

      // work only when matches is returned
      const matchResult = window.matchMedia('(max-width: 959px)')
      if (!matchResult || !matchResult.matches) return

      this.closeMenu()
    },
  },
}
</script>

<style scoped lang="stylus" src="./side.styl"></style>
