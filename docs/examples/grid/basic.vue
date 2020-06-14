<template lang="pug">
zi-grid(container justify="center" :spacing="3")
  zi-grid(:xs="6")
    zi-card.card(shadow)
  zi-grid(:xs="6")
    zi-card.card(shadow)
  zi-grid(:xs="6")
    zi-card.card(shadow)
</template>

<script>
export default {
  name: 'ex-grid-basic',
}
</script>

<style scoped lang="stylus">
.card
  width 100%
  height 100px
</style>
