<template lang="pug">
span.zi-dot-wrapper
  span.zi-dot(:class="[type]")
  span.zi-dot-label(v-if="$slots.default || label")
    slot {{ label }}
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-dot',

  props: {
    type: {
      type: String,
      validator: validator.enums(['primary', 'danger', 'success', 'warning']),
      default: 'primary',
    },

    label: String,
  },
}
</script>

<style lang="stylus" scoped src="./dot.styl" />
