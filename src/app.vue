<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  created() {
    let { name, language } = this.$route.params
    name = name || 'introduction'
    language = language || 'en-us'
    this.$router.push(`/${language}/${name}`)
  },
}
</script>
