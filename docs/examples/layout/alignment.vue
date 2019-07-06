<template lang="pug">
div
  zi-row(gutter="15")
    zi-col(span="16") #[.example]
  zi-row(gutter="15" justify="center" style="margin-top: 20px;")
    zi-col(span="16") #[.example]
  zi-row(gutter="15" justify="end" style="margin-top: 20px;")
    zi-col(span="16") #[.example]

  zi-row(gutter="15" style="margin-top: 20px;")
    zi-col(span="9") #[.example.big]

    zi-col(span="5")
      zi-row.full(align="top")
        zi-col #[.example.small]

    zi-col(span="5")
      zi-row.full(align="middle")
        zi-col #[.example.small]

    zi-col(span="5")
      zi-row.full(align="bottom")
        zi-col #[.example.small]
</template>

<script>
export default {
  name: 'ex-layout-alignment',
}
</script>

<style lang="stylus" scoped>
.example
  background var(--geist-success)
  padding var(--geist-gap-half)
  border-radius var(--geist-radius)
  color var(--geist-background)
  font-size .75rem

.big
  height 60px

.small
  height 20px

.full
  height 100%
</style>
