<template lang="pug">
.zi-note(:class="`${inUseType || ''} ${isFilled ? 'filled' : ''}`")
   span.zi-note-type(v-if="label !== ''")
     b {{ `${label || inUseType || 'note'}:&nbsp` }}
   slot
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-note',

  props: {
    type: {
      type: String,
      validator: validator.enums(['primary', 'success', 'error', 'warning', 'secondary']),
    },
    fill: Boolean,
    filled: Boolean,
    label: String,
    success: Boolean,
    warning: Boolean,
    error: Boolean,
    secondary: Boolean,
  },

  computed: {
    classes() {
      let str = ''
      this.success && (str += 'success')
      this.error && (str += 'error')
      this.warning && (str += 'warning')
      this.secondary && (str += 'secondary')
      return str
    },

    inUseType() {
      return this.classes || this.type
    },

    isFilled() {
      if (this.fill) {
        console.warn('[zi-note] > **DEPRECATION**: The props "fill" is deprecated.');
        console.warn('[zi-note] > **DEPRECATION**: Please use "filled" instead of "fill".');
      }
      return this.fill || this.filled
    },
  },
}
</script>

<style lang="stylus" src="./note.styl"></style>
