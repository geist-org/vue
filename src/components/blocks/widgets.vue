<template lang="pug">
.widgets
  zi-button.tool(@click="switchTheme" auto type="abort" id="toggle-theme")
    sun(v-if="isDark")
    moon(v-if="!isDark")
  zi-button.tool(@click="toGithub" auto type="abort")
    github
  zi-button.tool(@click="switchLanguage" auto type="abort" :loading="isLoading")
    span.language {{ isEnglish ? 'ZH' : 'EN' }}
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
    language: 'en-us',
    isEnglish: true,
    isLoading: false,
  }),

  mounted() {
    this.isEnglish = `${this.$route.params.language}`.toLowerCase().includes('en')
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

    switchLanguage() {
      this.isLoading = true
      const next = this.isEnglish ? 'zh-cn' : 'en-us'
      const path = `/${next}/${this.$route.params.name}`
      this.isEnglish = !this.isEnglish
      this.$router.push(path).finally(() => {
        setTimeout(() => {
          this.isLoading = false
          location.reload()
        }, 400)
      })
    },

    toGithub() {
      window.open('https://github.com/zeit-ui/vue')
    },
  },
}
</script>

<style lang="stylus" scoped>
.widgets
  height rem(40)
  display flex
  align-items center

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
  text-align center

  svg
    width rem(15)
    height rem(15)

.language
  font-size .8rem
  color var(--geist-foreground)
  display block
  width 100%
  height 100%
  margin-top 1px
  background-color var(--geist-background)
</style>
