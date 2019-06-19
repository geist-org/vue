<template lang="pug">
.files
  zi-files-item(:files="files" @file-click="fileClickHandler"
    :default-expand="defaultExpand" :is-dark="isDark")
</template>

<script>
import { theme, print } from '../utils'

export default {
  name: 'zi-files',

  data: () => ({
    isDark: theme.getCurrentTheme().includes('dark'),
  }),

  mounted() {
    theme.subscribeChange(name => this.updateTheme(name))
  },

  props: {
    files: {
      type: Array,
      default: () => ([]),
      validator(input) {
        const target = input.filter(item => !!item.name)
        if (target.length === input.length) return true
        print.error('[zi-files] prop: Every item in the `files` must contain a `name`')
        print.error('e.g. :files=[{ name: "", type: "file", "files": [] }]')
        return false
      },
    },
    defaultExpand: Boolean,
  },

  methods: {
    fileClickHandler(event) {
      this.$emit('file-click', event)
    },

    updateTheme(name) {
      this.isDark = name.includes('dark')
    },
  },
}
</script>

<style scoped lang="stylus">
.files
  padding 20px 28px
</style>
