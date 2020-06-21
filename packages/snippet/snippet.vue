<template lang="pug">
.zi-snippet(:style="{ width }" ref="snippet" :class="[type, filled && 'filled', !copy && 'without-copy']")
  pre(v-for="lineText in texts") {{ lineText }}
  .zi-copy(@click="copyText" v-show="copy")
    copy(:style="svgColor")
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

  data: () => ({
    toastType: 'success',
  }),

  computed: {
    svgColor() {
      return this.filled && this.type !== 'lite' && { color: 'var(--geist-background)!important' }
    },

    texts() {
      if (typeof this.text === 'string') return [this.text]
      return this.text
    },
  },

  methods: {
    copyText() {
      const copyResult = clipboard.copy(this.$refs.snippet.innerText)
      this.toastType = copyResult ? 'success' : 'danger'
      this.$Toast.show({
        type: this.toastType,
        text: 'Copied to clipboard!',
      })
    },
  },
}
</script>

<style lang="stylus" src="./snippet.styl"/>
