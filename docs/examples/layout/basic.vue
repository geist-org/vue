<template lang="pug">
div
  zi-row.example
    span Container
  zi-row.example(style="margin-top: 20px;")
    span Container
</template>

<script>
export default {
  name: 'ex-layout-basic',
}
</script>

<style lang="stylus" scoped>
.example
  background var(--geist-success)
  padding var(--geist-gap-half)
  border-radius var(--geist-radius)
  color var(--geist-background)
  font-size .75rem
</style>
