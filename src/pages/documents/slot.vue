<template lang="pug">
.zi-main.zi-layout.ex-layout
  .ex-side-shim
    ex-side
  .ex-content
    router-view
</template>

<script>
export default {
  name: 'document-slot',
}
</script>

<style scoped lang="stylus">
.ex-layout
  display flex
  max-width 1000px
  margin 0 auto

.ex-side-shim
  display flex
  min-width 200px
  max-width 300px
  margin-left -20px
  margin-right 20px

.ex-content
  display flex
  flex 1
  flex-direction column
</style>
