<template lang="pug">
    .zi-note(:class="classes")
      span.zi-note-type(v-if="label || type") {{ `${label || type}&nbsp` }}
      slot
</template>
<script>
import { validator } from '../utils'
export default {
  name: 'zi-note',

  props: {
    type: {
      type: String,
      validator: validator.enums(['hint', 'alert', 'error']),
    },
    label: {
      type: String,
    },
    hint: {
      type: Boolean,
      defaultValue: false,
    },
    alert: {
      type: Boolean,
      defaultValue: false,
    },
    error: {
      type: Boolean,
      defaultValue: false,
    },
  },

  computed: {
    classes() {
      let str = ''
      this.type && (str += this.type)
      this.hint && (str += 'hint')
      this.error && (str += 'error')
      this.alert && (str += 'alert')
      return str
    },
  },
}
</script>

<style module lang="stylus">

</style>
