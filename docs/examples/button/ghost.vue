<template lang="pug">
div(:class="$style.buttons")
  zi-button(type="primary" ghost) primary
  zi-button(type="success" ghost) success
  zi-button(type="warning" ghost) warning
  zi-button(type="danger" ghost) danger
</template>

<script>
export default {
  name: 'ex-button-ghost',
}
</script>

<style module lang="stylus">
.buttons
  >button
    margin-right 8px
    margin-bottom 8px
</style>
