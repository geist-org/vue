<template lang="pug">
button.zi-btn(@click="clickHandler"
  :class="classes"
  :tabindex="tabindex"
  @keyup.tab="isFocus = true"
  @blur="isFocus = false"
  )
  span.zi-loading-shim(v-if="loading")
    i
    i
    i
  zi-button-drip(ref="drip")
  span.zi-btn-icon.default(v-if="showIcon")
    component(:is="icon")
  slot
  span.zi-btn-icon.right(v-if="showIconRight")
    component(:is="iconRight")
</template>

<script>
import ZiButtonDrip from './button-drip'
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
      validator: validator.enums(['primary', 'success', 'warning', 'danger', 'abort', 'normal']),
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
    icon: Object,
    iconRight: Object,
  },

  data: () => ({
    dripStyles: '',
    isFocus: false,
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
      this.isFocus && (str += ' tab-selected')
      return str.trim()
    },

    showIcon() {
      return this.icon && this.size !== 'mini' && !this.loading
    },

    showIconRight() {
      return this.iconRight && this.size !== 'mini' && !this.loading
    },

    tabindex() {
      if (this.disabled) return -1
      return 0
    },
  },

  components: { ZiButtonDrip },

  methods: {
    clickHandler(event) {
      if (this.loading || this.disabled) return
      this.isFocus = false
      // hide drip when button in shadow status
      const showDrip = !this.shadow && !this.ghost && this.effect && this.$refs.drip
      showDrip && this.$refs.drip.trigger(event)
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="stylus" src="./button.styl"/>
