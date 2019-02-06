<template lang="pug">
  .zi-card(:class="[dark && 'zi-dark', !hoverable && $style.disableHover]")
    slot
</template>

<script>
export default {
  name: 'zi-card',

  props: {
    dark: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: true },
  },
}
</script>

<style module lang="stylus">
.disableHover
  box-shadow: initial !important
  &:hover
    box-shadow: initial !important
</style>
