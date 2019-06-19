<template lang="pug">
.ex-code
  p.zi-subheading.code-name EXAMPLE: #[b {{ codeName }}]
  zi-card.ex-code-box
    ex-code-render(:name="name" ref="codeRender")
    Fullscreen.ex-code-toggle(@click="showCode=!showCode" v-if="!showCode" :dark="isDark")
    FullscreenClose.ex-code-toggle(@click="showCode=!showCode" v-if="showCode" :dark="isDark")
  zi-transition-expand
    prism(language="pug" class="ex-source-code" v-if="showCode" :code="codeTemplate")
</template>

<script>
import 'prismjs'
import 'prismjs/components/prism-pug'
import Fullscreen from '@zeit-ui/vue-icons/packages/fullscreen'
import FullscreenClose from '@zeit-ui/vue-icons/packages/fullscreen-close'
import ZeitUI from '../../../packages'
import * as transitions from '../../../packages/utils/transitions'
import Prism from 'vue-prism-component'

export default {
  name: 'ex-code',

  components: {
    Prism,
    Fullscreen,
    FullscreenClose,
    ZiTransitionExpand: transitions.ZiTransitionExpand,
  },

  data: () => ({
    codeTemplate: '',
    codeName: '',
    showCode: false,
    isDark: ZeitUI.theme.getCurrentTheme().includes('dark'),
  }),

  props: {
    name: { type: String },
  },

  mounted() {
    this.codeName = this.name.split('-').reverse()[0]

    const template = this.findTemplate()
    this.codeTemplate = template && template._meta ? template._meta() : ''

    ZeitUI.theme.subscribeChange(name => this.updateTheme(name))
  },

  methods: {
    findTemplate() {
      if (!this.$refs.codeRender) return null
      const children = this.$refs.codeRender.$children
      if (!children || !children.length) return null
      return children[0]
    },

    updateTheme(name) {
      this.isDark = name.includes('dark')
    },
  },
}
</script>

<style lang="stylus" src="./code.styl"></style>
<style scoped lang="stylus">
.ex-code
  margin-top 45px

.code-name
  text-transform uppercase
  font-size 12px
  margin-bottom 8px

  b
    font-size 14px

.ex-source-code
  margin-top 10px

.ex-code-box
  position relative
  padding-top 1.6rem
  padding-bottom 1.5rem

.ex-code-toggle
  position absolute
  width 15px
  height 15px
  right 10px
  bottom 7px
  cursor pointer
  opacity .5
  transition all .2s ease

  &:hover
    opacity 1

  i
    font-size 17px
</style>
