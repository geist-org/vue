<template lang="pug">
.zi-fieldset(:class="disabled && 'disabled'")
  .zi-fieldset-content
    slot
  .zi-fieldset-footer(v-if="!$slots.footer") {{ footer }}
  .zi-fieldset-footer(v-else)
    slot(name="footer")
</template>

<script>
export default {
  name: 'zi-fieldset',

  props: {
    footer: String,
    disabled: Boolean,
  },
}
</script>

<style lang="stylus" src="./fieldset.styl"/>
