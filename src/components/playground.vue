<template lang="pug">
div
  zi-card.preview(ref="preview")
  details.details(:open="open")
    summary
      span.preview #[Dropdown.down] Code Editor
      ex-copy-icon.copy(@click.stop.prevent="copy")
    div
      ex-editor(:code="code" @change="change")
      .error(v-if="error") Open console see the error
</template>

<script>
import Vue from 'vue/dist/vue'
import ZeitUI from '../../packages'
import Dropdown from '@zeit-ui/vue-icons/packages/down'

Vue.use(ZeitUI)

function parse(input) {
  const html = document.createElement('div')
  const content = input.trim()
  html.innerHTML = content
  try {
    const template = html.querySelector('template')
    const script = html.querySelector('script')
    const styles = Array.prototype.slice.call(html.querySelectorAll('style')).map(n => n.innerHTML)
    if (!template && !script && !styles.length) {
      return {
        content,
        script: content,
      }
    }
    return {
      content,
      template: template ? template.innerHTML : '',
      script: script ? script.innerHTML : '',
      styles,
    }
  } catch (error) {
    return {
      error,
    }
  }
}

export default {
  name: 'ex-playground',

  components: {
    Dropdown,
  },

  data: () => ({
    vm: null,
    error: null,
  }),

  props: {
    open: Boolean,
    code: {
      type: String,
      default:
/* eslint-disable no-useless-escape */
`<template>
<div>
  <zi-row justify="space-between" align="middle">
    <h1>Play</h1>
    <zi-button class="button" @click="click">Start</zi-button>
  </zi-row>
  <zi-note>NOTE: It is a happy talent to know how to play.</zi-note>
</div>
</template>
<script>
export default {
  methods: {
    click() {
      this.$Toast.success('Update the code!')
    }
  }
}
<\/script>
<style>
.button {
  background-color: var(--geist-foreground);
  border: 1px solid var(--geist-foreground);
  color: var(--geist-background);
}
<\/style>`,
      /*  eslint-enable no-useless-escape */
    },
  },

  mounted() {
    this.render(this.code)
  },

  methods: {
    change(code) {
      this.render(code)
    },

    render(code) {
      try {
        const { template, script, styles } = parse(code)
        let options = {}
        if (script) {
          options = script.replace(/export\s+default\s+/g, '')
          // eslint-disable-next-line no-new-func
          options = new Function('fn', `return (${options})`)()
        }
        options.template = template

        if (this.vm) {
          this.vm.$destroy()
          const scoped = `scoped-${this.vm._uid}`
          this.removeStyles(scoped)
          this.$refs.preview.$el.classList.remove(scoped)
          this.$refs.preview.$el.removeChild(this.vm.$el)
        }
        this.vm = new Vue(options)
        const div = document.createElement('div')
        this.$refs.preview.$el.append(div)
        this.addStyles(this.$refs.preview.$el, styles)
        this.$refs.preview.$el.classList.add(`scoped-${this.vm._uid}`)
        this.vm.$mount(div)
      } catch (error) {
        console.log(error)
        this.error = error
      }
    },

    addStyles(parent, styles) {
      styles.map(style => {
        const regex = /(^|\})\s*([^{]+)/g
        const styleContent = style.trim().replace(regex, (m, g1, g2) => {
          return g1 ? `${g1} .scoped-${this.vm._uid} ${g2}` : `.scoped-${this.vm._uid} ${g2}`
        })
        const styleElement = document.createElement('style')
        styleElement.innerHTML = styleContent
        parent.appendChild(styleElement)
      })
    },

    removeStyles(scoped) {
      const styles = document.querySelectorAll(`.preview.${scoped} style`)
      Array.prototype.slice.call(styles).map(style => {
        this.$refs.preview.$el.removeChild(style)
      })
    },
  },
}

</script>

<style scoped lang="stylus">
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

.error
  padding var(--geist-gap)
  background var(--geist-foreground)
  color var(--geist-error-dark)
</style>
