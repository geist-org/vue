<template lang="pug">
div
  zi-row
    zi-col.first
    zi-col.last
  zi-row(style="margin-top: 20px;")
    zi-col.first(span="8")
    zi-col.last
</template>

<script>
export default {
  name: 'ex-layout-column',
}
</script>

<style lang="stylus" scoped>
.first, .last
  background var(--accents-2)
  padding var(--geist-gap-half)
  border-radius var(--geist-radius)

.last
  background var(--accents-4)
</style>
