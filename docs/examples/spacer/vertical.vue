<template lang="pug">
div
  zi-row.container
    zi-spacer
  zi-spacer
  zi-row.container
    zi-spacer(:y="2")
  zi-spacer
  zi-row.container
    zi-spacer(:y="3")
</template>

<script>
export default {
  name: 'ex-spacer-vertical',
}
</script>

<style lang="stylus" scoped>
.container
  background-color var(--accents-6)
</style>
