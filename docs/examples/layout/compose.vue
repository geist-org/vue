<template lang="pug">
div
  zi-row(gutter="15")
    zi-col(span="16") #[.example]
    zi-col(span="8") #[.example]
  zi-row(gutter="15" style="margin-top: 20px;")
    zi-col(span="8") #[.example]
    zi-col(span="8") #[.example]
    zi-col(span="4") #[.example]
    zi-col(span="4") #[.example]
  zi-row(gutter="15" style="margin-top: 20px;")
    zi-col(span="4") #[.example]
    zi-col(span="16") #[.example]
    zi-col(span="4") #[.example]
</template>

<script>
export default {
  name: 'ex-layout-compose',
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
