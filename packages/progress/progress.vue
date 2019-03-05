<template lang="pug">
div
  div.zi-progress-bar
    div.zi-progress
      div.zi-progress__inner(:style="styles")
    span.zi-progress__text {{ percentage <= 100 ? percentage : 100 }}
</template>

<script>
export default {
  name: 'zi-progress',

  props: {
    percentage: {
      type: Number,
      default: 0,
    },

    color: [Array, String],
  },

  data: () => ({
    currentColor: '',
  }),

  computed: {
    styles() {
      const obj = { width: `${ this.percentage <= 100 ? this.percentage : 100 }%` }
      if (this.color) {
        typeof this.color === 'string' && Object.assign(obj, {backgroundColor: this.color})
        Array.isArray(this.color) && Object.assign(obj, { backgroundColor: this.background })
      }
      return obj
    },

    background() {
      const current = this.color.find(item => item.num === this.percentage)
      current && (this.currentColor = current.color)
      return this.currentColor
    },
  },
}
</script>
