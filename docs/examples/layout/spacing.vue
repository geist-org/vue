<template lang="pug">
div
  zi-row(gutter="15")
    zi-col
      .example
    zi-col
      .example
    zi-col
      .example
  zi-row(gutter="15" style="margin-top: 20px;")
    zi-col
      .example
    zi-col
      .example
    zi-col
      .example
</template>

<script>
export default {
  name: 'ex-layout-spacing',
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
