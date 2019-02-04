<template lang="pug">
.zi-main.zi-layout.ex-layout
  ex-side.ex-side
  ex-content.ex-content
</template>

<script>
export default {
  name: 'document-main',
}
</script>

<style module lang="stylus">
.ex-layout
  display flex
  max-width 1100px
  margin 0 auto

.ex-side
  display flex
  min-width 200px

.ex-content
  display flex
  flex-direction column
  overflow hidden
</style>
