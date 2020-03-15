<template lang="pug">
.ex-code
  h3.zi-subheading.code-name {{ codeName }}
  p.desc(v-if="$slots.default") #[slot]
  zi-card.ex-code-box(:class="{ 'box-hidden-code': hiddenCode }")
    ex-code-render(:name="name" ref="codeRender")
  details.details(ref="details" v-if="!hiddenCode")
    summary
      span.preview #[Dropdown.down] Code Preview
      ex-copy-icon.copy(@click.stop.prevent="copy")
    div(ref="prism")
      prism(language="pug" class="ex-source-code" :code="codeTemplate")

  ex-editor(:code="codeTemplate" @change="change")
</template>

<script>
import 'prismjs'
import 'prismjs/components/prism-pug'
import Dropdown from '@zeit-ui/vue-icons/packages/down'
import Prism from 'vue-prism-component'
import { getRealShape } from '../../../packages/utils/bounding'

export default {
  name: 'ex-code',

  components: {
    Prism, Dropdown,
  },

  data: () => ({
    codeTemplate: '',
    codeName: '',
  }),

  props: {
    name: { type: String },
    hiddenCode: Boolean,
    desc: String,
  },

  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)

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

    async copy() {
      await this.$copyText(this.codeTemplate)
      this.$Toast.success({
        text: 'Copied to clipboard!',
      })
    },

    resize() {
      try {
        const { width } = getRealShape(this.$refs.details)
        if (width) {
          this.$refs.prism.setAttribute('style', `width: ${width}px;`)
        }
      } catch (error) {
      }
    },

    change() {

    },
  },
}
</script>

<style lang="stylus" src="./code.styl"></style>
<style scoped lang="stylus">
.ex-code
  margin-top 4.5rem

.code-name
  text-transform uppercase
  font-size 1.2rem
  line-height 1
  margin-bottom 0

.desc
  margin-top 0
  color var(--accents-5)
  font-size .8rem

.ex-source-code
  margin-top 10px

.ex-code-box
  margin-top 1.25rem
  position relative
  padding-top var(--geist-page-margin)
  padding-bottom var(--geist-page-margin)
  border-bottom-left-radius 0
  border-bottom-right-radius 0

.box-hidden-code
  border-bottom-left-radius var(--geist-radius)
  border-bottom-right-radius var(--geist-radius)

.details
  border-bottom-left-radius var(--geist-radius)
  border-bottom-right-radius var(--geist-radius)
  width 100%

  &[open]
    summary
      border-bottom none
      border-bottom-left-radius 0
      border-bottom-right-radius 0

    .down
      transform rotateZ(0deg)

    .copy
      opacity 1
      visibility visible

  summary
    padding var(--geist-gap-half) var(--geist-gap)
    border-left 1px solid var(--accents-2)
    border-bottom 1px solid var(--accents-2)
    border-right 1px solid var(--accents-2)
    border-bottom-left-radius var(--geist-radius)
    border-bottom-right-radius var(--geist-radius)
    display flex
    flex 1
    justify-content space-between
    align-items center

    span
      display flex
      align-items center

  pre
    border-top-left-radius 0
    border-top-right-radius 0
    margin 0
    background-color var(--geist-background)
    overflow-x auto

.down
  width rem(10)
  height rem(10)
  margin-right 5px
  transform rotateZ(-90deg)
  transition all .1s ease

.copy
  transition all .1s ease-in
  color var(--accents-5)
  opacity 0
  visibility hidden
  width rem(14)

.preview
  font-size rem(13)
</style>
