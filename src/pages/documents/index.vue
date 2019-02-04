<template lang="pug">
  ex-doc(:doc-name='docName')
</template>

<script>
export default {
  name: 'document-main',

  data: () => ({
    docName: '',
  }),

  beforeRouteUpdate(to, from, next) {
    this.docName = to.params.name
    next()
  },

  mounted() {
    this.docName = this.$route.params.name
  },
}
</script>
