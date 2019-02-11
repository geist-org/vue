<template lang="pug">
div(:class="$style.buttons")
  zi-button(disabled) disabled
  zi-button(shadow) shadow
  zi-button(circular) circular
</template>

<script>
export default {
  name: 'ex-button-type',
}
</script>

<style module lang="stylus">
.buttons
  >button
    margin-bottom 20px
    display block
</style>
