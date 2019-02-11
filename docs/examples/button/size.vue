<template lang="pug">
div(:class="$style.buttons")
  zi-button(size="mini") mini
  zi-button(size="small") small
  zi-button default
  zi-button(size="big") big
  zi-button(size="small" auto) auto width
</template>

<script>
export default {
  name: 'ex-button-size',
}
</script>

<style module lang="stylus">
.buttons
  >button
    margin-right 8px
    margin-bottom 8px
    display block
</style>
