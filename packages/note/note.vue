<template lang="pug">
.zi-note(:class="inUseType")
   span.zi-note-type(v-if="label || inUseType") {{ `${ label || inUseType }:&nbsp` }}
   slot
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-note',

  props: {
    type: {
      type: String,
      validator: validator.enums(['hint', 'error', 'alert']),
    },
    label: String,
    hint: Boolean,
    alert: Boolean,
    error: Boolean,
  },

  computed: {
    classes() {
      let str = ''
      this.hint && (str += 'hint')
      this.error && (str += 'error')
      this.alert && (str += 'alert')
      return str
    },
    inUseType() {
      return this.classes || this.type
    },
  },
}
</script>

<style lang="stylus" src="./note.styl"></style>
