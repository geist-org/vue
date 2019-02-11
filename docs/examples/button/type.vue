<template lang="pug">
div(:class="$style.buttons")
  zi-button(type="primary") primary
  zi-button(type="success") success
  zi-button(type="warning") warning
  zi-button(type="danger") danger
</template>

<script>
export default {
  name: 'ex-button-type',
}
</script>

<style module lang="stylus">
.buttons
  >button
    margin-right 8px
    margin-bottom 8px
</style>
