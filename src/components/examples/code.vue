<template lang="pug">
.ex-code
  p.zi-subheading.code-name EXAMPLE: #[b {{ codeName }}]
  zi-card.ex-code-box
    ex-code-render(:name="name" ref="codeRender")
    .ex-code-toggle(@click="showCode=!showCode")
      i.zi-icon-code
  zi-transition-expand
    prism(language="pug" class="ex-source-code" v-if="showCode") {{ codeTemplate }}
</template>

<script>
import 'prismjs'
import 'prismjs/components/prism-pug'
import * as transitions from '../../../packages/utils/transitions'
import Prism from 'vue-prism-component'

export default {
  name: 'ex-code',

  components: { Prism, ZiTransitionExpand: transitions.ZiTransitionExpand },

  data: () => ({
    codeTemplate: '',
    codeName: '',
    showCode: false,
  }),

  props: {
    name: { type: String },
  },

  mounted() {
    this.codeName = this.name.split('-').reverse()[0]

    const template = this.findTemplate()
    this.codeTemplate = template && template._meta ? template._meta() : ''
  },

  methods: {
    findTemplate() {
      if (!this.$refs.codeRender) return null
      const children = this.$refs.codeRender.$children
      if (!children || !children.length) return null
      return children[0]
    },
  },
}
</script>

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
  width 20px
  height 20px
  right 5px
  bottom 5px
  cursor pointer
  opacity .5
  transition all .2s ease

  &:hover
    opacity 1

  i
    font-size 17px
</style>
