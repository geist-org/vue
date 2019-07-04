<template lang="pug">
.zi-main.zi-layout.ex-layout
  .ex-side-shim
    ex-side
  .ex-content
    router-view
</template>

<style scoped lang="stylus">
.ex-layout
  display flex
  max-width 1000px
  margin 0 auto

  +layout(xs)
    padding 3.7rem 1rem 3.7rem 1rem
    max-width 100%
    width 100%

  +layout(sm)
    padding 3.7rem 1rem 3.7rem 1rem
    max-width 100%
    width 100%

.ex-side-shim
  display flex
  min-width 200px
  max-width 300px
  margin-left -20px
  margin-right 20px

  +layout(xs)
    width 0
    margin 0
    min-width unset
    max-width unset

  +layout(sm)
    width 0
    margin 0
    min-width unset
    max-width unset

.ex-content
  display flex
  flex 1
  flex-direction column
</style>
