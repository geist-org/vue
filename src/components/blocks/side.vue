<template lang="pug">
.ex-side(:class="{ 'active': isActiveMenu }")
  .bar
    i.zi-icon-menu(@click="toggleMenu")
    span @zeit-ui/vue
  .bar-bg(:class="{ 'active': isActiveMenu }" @click="closeMenu")
  a(@click="toggleTheme(isDark)").zi-title {{ isDark? 'DARK_OFF' : 'DARK_ON' }}
  template(v-for='group in sides')
    p.zi-title {{ group.name }}
    ul(v-if='group.children && group.children.length' @click="childEvent")
      li(v-for='item in group.children' v-if='item.docName')
        | #[router-link.component(:to='`/docs/${item.docName}`') {{ item.docName }}]
</template>

<script>
import ZeitUI from '../../../packages'
import docs from '#/docs/index'

const SIDE_WEIGHT = {
  start: 1,
  components: 2,
}

export default {
  name: 'ex-side',

  data: () => ({
    sides: [],
    isActiveMenu: false,
    isDark: ZeitUI.theme.getCurrentTheme().includes('dark'),
  }),

  mounted() {
    this.sides = this.parseDocs(docs)
    const isDark = `${localStorage.getItem('theme')}`.includes('dark')
    this.toggleTheme(!isDark)
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

    toggleMenu() {
      this.isActiveMenu = !this.isActiveMenu
    },

    toggleTheme(isDark) {
      const next = isDark ? 'zi-light-theme' : 'zi-dark-theme'
      ZeitUI.theme.setTheme(next)
      localStorage.setItem('theme', next)
      this.isDark = !isDark
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
