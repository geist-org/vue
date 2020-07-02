<template lang="pug">
.files
  zi-files-item(:files="files" @file-click="fileClickHandler" :default-expand="defaultExpand")
</template>

<script>
import { print } from '../utils'

export default {
  name: 'zi-files',

  props: {
    files: {
      type: Array,
      default: () => [],
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
  },
}
</script>

<style scoped lang="stylus">
.files
  padding 20px 28px
</style>
