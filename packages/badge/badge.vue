<template lang="pug">
span.zi-badge(v-if="!hasSlot" :class="status || ''") {{ countLabel }}
span.zi-badge-group(v-else)
  slot
  span.zi-badge(:class="[status || '', dot && 'dot']" v-if="showSup") {{ countLabel }}
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-badge',

  props: {
    count: [String, Number],
    maxCount: [String, Number],
    showZero: Boolean,
    dot: Boolean,
    status: {
      type: String,
      validator: validator.enums(['success', 'warning', 'error']),
    },
  },

  computed: {
    hasSlot() {
      return !!this.$slots.default
    },

    showSup() {
      if (this.showZero) return true
      return +this.count !== 0
    },

    countLabel() {
      const max = +this.maxCount
      if (Number.isNaN(max)) return this.count
      if (this.count > max) return `${max}+`
      return this.count
    },
  },
}
</script>

<style lang="stylus" src="./badge.styl" />
