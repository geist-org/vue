<template lang="pug">
.zi-note(:class="`${inUseType || ''} ${fill ? 'fill' : ''}`")
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
      validator: validator.enums(['success', 'danger', 'warning', 'secondary']),
    },
    fill: Boolean,
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
      this.error && (str += 'danger')
      this.warning && (str += 'warning')
      this.secondary && (str += 'secondary')
      return str
    },

    inUseType() {
      return this.classes || this.type
    },
  },
}
</script>

<style lang="stylus" src="./note.styl"></style>
