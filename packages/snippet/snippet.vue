<template lang="pug">
.zi-snippet(
  :style="{ width }"
  ref="snippet"
  :class="[type, filled ? 'filled' : '', !copy ? 'without-copy' : '']")
  pre(v-for="(lineText, index) in texts" :key="index") {{ lineText }}
  .zi-copy(@click="copyText" v-show="copy")
    copy(:color="svgColor")
</template>

<script>
import copy from '@zeit-ui/vue-icons/packages/copy'
import { validator, clipboard } from '../utils'

export default {
  name: 'zi-snippet',

  components: { copy },

  props: {
    text: [String, Array],
    width: String,
    type: {
      type: String,
      default: 'default',
      validator: validator.enums(['default', 'dark', 'success', 'warning', 'error', 'secondary', 'lite']),
    },
    filled: Boolean,
    copy: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    svgColor() {
      const isSpecialType = this.type !== 'lite' && this.type !== 'default'
      if (this.filled && isSpecialType) return 'var(--geist-background)'
      const currentType = {
        success: 'var(--geist-success)',
        warning: 'var(--geist-warning)',
        secondary: 'var(--accents-5)',
        error: 'var(--geist-error)',
        dark: 'var(--geist-background)',
        lite: 'var(--geist-foreground)',
        default: 'var(--geist-foreground)',
      }
      return currentType[this.type]
    },

    texts() {
      if (!Array.isArray(this.text)) return [this.text]
      return this.text
    },
  },

  methods: {
    copyText() {
      const text = this.$refs.snippet.innerText
      if (!text || !this.copy) return
      clipboard.copy(text)
      this.$Toast.show({
        type: 'success',
        text: 'Copied to clipboard!',
      })
    },
  },
}
</script>

<style lang="stylus" src="./snippet.styl"/>
