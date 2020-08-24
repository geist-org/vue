<template lang="pug">
.ex-side(:class="{ 'active': isActiveMenu }" @touchstart="fixFireFoxEvent")
  .bar
    button.toggle-container(@click="toggleMenu")
      sliders(color="var(--geist-foreground)").bar-toggle
    span.bar-title @geist-ui/vue
  .bar-bg(:class="{ 'active': isActiveMenu }")
  ex-widgets
  template(v-for='group in sides')
    p.zi-title {{ translate(group.name) }}
    ul(v-if='group.children && group.children.length' @click="childEvent")
      li(v-for='item in group.children' v-if='item.docName')
        | #[router-link.component(:to='`/${language}/${item.docName}`') {{ translate(item.docName) }}]
</template>

<script>
import sliders from '@geist-ui/vue-icons/packages/sliders'
import cnSide from './side.zh-cn'
import docs from '#/docs/index'

const SIDE_WEIGHT = {
  start: 1,
  'getting-started': 2,
  customization: 3,
  components: 5,
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
    const currentDocs = docs[this.language]
    this.sides = this.parseDocs(currentDocs)
  },

  computed: {
    language() {
      return `${this.$route.params.language}`.toLowerCase().includes('en') ? 'en-us' : 'zh-cn'
    },
  },

  methods: {
    fixFireFoxEvent() {},

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
          const children = group[name].sort((a, b) => DOC_WEIGHT[a.docName] - DOC_WEIGHT[b.docName])
          return {
            name,
            children,
          }
        })
    },

    toggleMenu() {
      this.isActiveMenu = !this.isActiveMenu
      if (this.isActiveMenu) {
        document.documentElement.setAttribute('style', 'overflow: hidden;')
        return
      }
      this.closeMenu()
    },

    closeMenu() {
      this.isActiveMenu = false
      document.documentElement.setAttribute('style', '')
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

    translate(name) {
      if (this.language !== 'zh-cn') return name
      return cnSide[name] || name
    },
  },
}
</script>

<style scoped lang="stylus" src="./side.styl"></style>
