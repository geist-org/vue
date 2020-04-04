<template lang="pug">
.zi-progress-bar(:class="fix")
  .zi-progress
    .zi-progress__inner(:style="styles" :class="type")
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-progress',

  props: {
    value: {
      type: [Number, String],
      default: 0,
    },

    fix: {
      type: String,
      validator: validator.enums(['top', 'bottom']),
    },

    colors: Array,

    max: {
      type: [Number, String],
      default: 100,
    },

    type: {
      type: String,
      default: 'default',
      validator: validator.enums(['default', 'success', 'danger', 'warning', 'secondary']),
    },
  },

  data: () => ({
    currentColor: '',
  }),

  computed: {
    privateMax() {
      if (Number.isNaN(+this.max)) throw new Error('[Progress Error]max must be Number type')
      return +this.max
    },

    privateValue() {
      if (Number.isNaN(+this.value)) throw new Error('[Progress Error]value must be Number type')
      const value = +this.value
      if (value < 0) return 0
      if (value > this.privateMax) return this.privateMax
      return value
    },

    privatePercentage() {
      return Math.round(this.privateValue / this.privateMax * 100)
    },

    styles() {
      const baseStyle = { width: `${this.privatePercentage}%` }
      if (!this.colors || !this.colors.length) return baseStyle
      return Object.assign({}, baseStyle, {
        backgroundColor: this.safeHex(this.background),
      })
    },

    background() {
      const current = this.sortable.find(item => {
        let value = +item.value
        if (value > this.privateMax) value = this.privateMax
        return this.privatePercentage >= Math.round(value / this.privateMax * 100)
      })
      return current && (this.currentColor = current.color)
    },

    sortable() {
      return this.colors.sort((a, b) => +b.value - +a.value)
    },
  },

  methods: {
    safeHex(color) {
      if (!color) return color
      const str = `${color}`
      if (str.startsWith('rgb') || str.startsWith('#')) return color
      return `#${color}`
    },
  },
}
</script>

<style lang="stylus" src="./progress.styl"></style>
