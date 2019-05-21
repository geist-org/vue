<template lang="pug">
div
  ex-doc(:doc-name='docName')
</template>

<script>
export default {
  name: 'document-main',

  data: () => ({
    docName: '',
    tableData: [],
  }),

  beforeRouteUpdate(to, from, next) {
    if (this.docName !== to.params.name) {
      window.scrollTo({ top: 0 })
    }

    this.docName = to.params.name
    next()
  },

  mounted() {
    this.docName = this.$route.params.name
    !this.docName && this.$router.push('/docs/about')
  },
}
</script>
