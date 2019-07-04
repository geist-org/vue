<template lang="pug">
div.icon-box
  DirectoryIcon.icon(v-if="isDir")
  FileIcon.icon-file(v-else)
</template>

<script>
import FileIcon from '@zeit-ui/vue-icons/packages/file'
import DirectoryIcon from '@zeit-ui/vue-icons/packages/directory'

export default {
  name: 'zi-files-icon',

  components: {
    FileIcon,
    DirectoryIcon,
  },

  props: {
    isDir: Boolean,
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
