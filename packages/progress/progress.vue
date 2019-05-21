<template lang="pug">
.zi-progress-bar(:class="fix")
  .zi-progress
    .zi-progress__inner(:style="styles")
  span.zi-progress__text {{ percentage <= 100 ? percentage : 100 }}
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-progress',

  props: {
    percentage: {
      type: [Number, String],
      default: 0,
    },

    fix: {
      type: String,
      validator: validator.enums(['top', 'bottom']),
    },

    color: [Array, String],
  },

  data: () => ({
    currentColor: '',
  }),

  computed: {
    privatePercentage() {
      if (Number.isNaN(Number(this.percentage))) throw new Error('error about percentage')
      return Number(this.percentage)
    },

    styles() {
      const baseStyle = { width: `${this.privatePercentage <= 100 ? this.privatePercentage : 100}%` }
      if (!this.color) return baseStyle
      return Object.assign({}, baseStyle, {
        backgroundColor: this.safeHex(Array.isArray(this.color) ? this.background : this.color),
      })
    },

    background() {
      const current = this.sortable.find(item => this.privatePercentage >= Number(item.num))
      return current && (this.currentColor = current.color)
    },

    sortable() {
      return this.color.sort((a, b) => Number(b.num) - Number(a.num))
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
