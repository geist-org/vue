<template lang="pug">
div.zi-progress-bar(:class="fix")
  div.zi-progress
    div.zi-progress__inner(:style="styles")
  span.zi-progress__text {{ percentage <= 100 ? percentage : 100 }}
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-progress',

  props: {
    percentage: {
      type: Number,
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
    styles() {
      const baseStyle = { width: `${ this.percentage <= 100 ? this.percentage : 100 }%` }
      if (this.color) {
        let styles = {}
        typeof this.color === 'string' && (styles = Object.assign({}, baseStyle, {backgroundColor: this.color}))
        Array.isArray(this.color) && (styles = Object.assign({}, baseStyle, { backgroundColor: this.background }))
        return styles
      }
      return baseStyle
    },

    background() {
      const current = this.sortable.find((item, index) => {
        if (index < this.sortable.length - 1) return this.percentage >= item.num && this.percentage < this.sortable[index + 1].num
        return item
      })
      current && (this.currentColor = current.color)
      return this.currentColor
    },

    sortable() {
      return this.color.sort((a, b) => a.num - b.num)
    },
  },
}
</script>

<style scoped>
    .zi-progress-bar .top {
        height: 3px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    .bottom {
       height: 3px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

</style>
