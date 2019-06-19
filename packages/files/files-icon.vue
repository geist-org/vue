<template lang="pug">
div.icon-box
  DirectoryIcon.icon(v-if="isDir" :dark="isDark")
  FileIcon.icon-file(v-else :dark="isDark")
</template>

<script>
import FileIcon from '@zeit-ui/vue-icons/packages/file'
import DirectoryIcon from '@zeit-ui/vue-icons/packages/directory'
import { theme } from '../utils'

export default {
  name: 'zi-files-icon',

  components: {
    FileIcon,
    DirectoryIcon,
  },

  data: () => ({
    isDark: theme.getCurrentTheme().includes('dark'),
  }),

  props: {
    isDir: Boolean,
  },

  mounted() {
    theme.subscribeChange(name => this.updateTheme(name))
  },

  methods: {
    updateTheme(name) {
      this.isDark = name.includes('dark')
    },
  },
}
</script>

<style lang="stylus" scoped>
.icon
  width 20px
  height 20px

.icon-file
  width 18px
  height 18px

.icon-box
  width 24px
  height 24px
  display flex
  justify-content center
  align-items center
  margin-right 8px
</style>
