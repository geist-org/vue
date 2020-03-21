<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  created() {
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
body::-webkit-scrollbar {
  width 5px
  background-color var(--accents-1)
}

body::-webkit-scrollbar-thumb {
  background-color var(--accents-2)
  border-radius 5px
}
</style>
