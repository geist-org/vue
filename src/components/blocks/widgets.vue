<template lang="pug">
.widgets
  zi-button.tool(@click="switchTheme" auto type="abort" id="toggle-theme")
    sun(v-if="isDark")
    moon(v-if="!isDark")
  zi-button.tool(@click="toGithub" auto type="abort")
    github
</template>

<script>
import ZeitUI from '../../../packages'
import sun from '@zeit-ui/vue-icons/packages/sun'
import moon from '@zeit-ui/vue-icons/packages/moon'
import github from '@zeit-ui/vue-icons/packages/github'

export default {
  name: 'ex-widgets',

  components: { sun, moon, github },

  data: () => ({
    isDark: false,
  }),

  mounted() {
    const isDark = `${localStorage.getItem('theme')}`.includes('dark')
    if (this.isDark !== isDark) {
      this.switchTheme()
    }
  },

  methods: {
    switchTheme() {
      const next = this.isDark ? 'light-theme' : 'dark-theme'
      if (this.isDark) {
        ZeitUI.theme.enableLight()
      } else {
        ZeitUI.theme.enableDark()
      }
      localStorage.setItem('theme', next)
      this.isDark = !this.isDark
    },

    toGithub() {
      window.open('https://github.com/zeit-ui/vue')
    },
  },
}
</script>

<style lang="stylus" scoped>
.widgets
  &:before
    content ''
    display inline-block
    height rem(20)
    width rem(5)
    background-color var(--accents-2)

.tool
  padding 0
  width rem(40)
  height rem(40)
  display inline-flex
  justify-content center
  align-items center

  svg
    width rem(15)
    height rem(15)
</style>
