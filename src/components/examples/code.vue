<template lang="pug">
div.ex-code
  p.zi-subheading.code-name EXAMPLE: #[b {{ codeName }}]
  ex-code-render(:name="name" ref="codeRender")
  prism(language="pug" class="ex-source-code") {{ codeTemplate }}
</template>

<script>
import 'prismjs'
import 'prismjs/components/prism-pug'
import Prism from 'vue-prism-component'

export default {
  name: 'ex-code',

  components: { Prism },

  data: () => ({
    codeTemplate: '',
    codeName: '',
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
  background-color #fff
  position relative
  &:hover
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.12)

</style>
