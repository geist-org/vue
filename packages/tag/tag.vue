<template lang="pug">
span.zi-tag(:class="type || classes")
  slot
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-tag',

  props: {
    type: {
      type: String,
      validator: validator.enums(['success', 'warning', 'danger']),
    },
    success: Boolean,
    warning: Boolean,
    danger: Boolean,
  },

  computed: {
    classes() {
      let str = ''
      this.success && (str += 'success')
      this.warning && (str += 'warning')
      this.danger && (str += 'danger')
      return str
    },
  },
}
</script>
