<template lang="pug">
button.zi-btn(@click="clickHandler" :class="classes")
  i(v-if="icon && !hasSuffix" :class="icon")
  span.zi-loading-shim(v-if="loading")
    i
    i
    i
  zi-button-drip(ref="drip")
  slot
  i(v-if="icon && hasSuffix" :class="icon")
</template>

<script>
import ZiButtonDrip from './button_drip'
import { validator } from '../utils'

export default {
  name: 'zi-button',

  props: {
    size: {
      type: String,
      default: 'medium',
      validator: validator.enums(['small', 'mini', 'medium', 'big', 'huge']),
    },
    type: {
      type: String,
      validator: validator.enums(['primary', 'success', 'warning', 'danger', 'abort']),
    },
    loading: Boolean,
    disabled: Boolean,
    shadow: Boolean,
    circular: Boolean,
    auto: Boolean,
    ghost: Boolean,
    effect: {
      type: Boolean,
      default: true,
    },
    icon: String,
  },

  data: () => ({
    dripStyles: '',
  }),

  computed: {
    classes() {
      let str = ''
      this.loading && (str += ' loading')
      this.disabled && (str += ' disabled')
      this.shadow && (str += ' shadow')
      this.circular && (str += ' circular')
      this.auto && (str += ' auto')
      this.ghost && (str += ' ghost')
      this.type && (str += ` ${this.type}`)
      this.size && (str += ` ${this.size}`)
      return str
    },

    hasSuffix() {
      return this.icon && this.icon.includes('suffix')
    },
  },

  components: { ZiButtonDrip },

  methods: {
    clickHandler(event) {
      if (this.loading || this.disabled) return
      // hide drip when button in shadow status
      const showDrip = !this.shadow && this.effect && this.$refs.drip
      showDrip && this.$refs.drip.trigger(event)
      this.$emit('click', event)
    },
  },
}
</script>

