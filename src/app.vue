<template lang="pug">
#app
  router-view
</template>

<script>
import { validator } from '../packages/utils'

export default {
  created() {
    if (validator.isMac()) {
      document.body.className = ''
    } else {
      document.body.className = 'window-scrollbar'
    }
    let { name, language } = this.$route.params
    const paramsMissing = !name || !language
    if (!paramsMissing) return

    name = name || 'introduction'
    language = language || 'en-us'
    this.$router.push(`/${language}/${name}`)
  },
}
</script>

<style lang="stylus">
.window-scrollbar::-webkit-scrollbar {
  width 5px
  background-color var(--accents-1)
}

.window-scrollbar::-webkit-scrollbar-thumb {
  background-color var(--accents-2)
  border-radius 5px
}
</style>
