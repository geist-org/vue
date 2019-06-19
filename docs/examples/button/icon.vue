<template lang="pug">
div(:class="$style.buttons")
  zi-button(icon="prefix ") code
    template(v-slot:prefix)
      i.zi-icon-ex.zi-icon-code
  zi-button(icon="suffix zi-icon-github") github
  zi-button(circular icon="suffix zi-icon-up") show more
</template>

<script>
export default {
  name: 'ex-button-icon',
}
</script>

<style module lang="stylus">
.buttons
  >button
    margin-right 8px
    margin-bottom 8px
</style>
