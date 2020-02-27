<template lang="pug">
.colors
  .color(v-for="(color, index) of colorData"
    :key="color.name"
    :style="valueToStyle(color.value, index)"
    ref="color"
  )
    h4(@click="copy(color.name)") {{ color.name }}
    span.value(@click="copy(color.value)") {{ color.value }}
    span.cssValue(@click="copy(getCSSValue(color.value))") {{ getCSSValue(color.value) }}
</template>

<script>
import mixins from './_mixin'

const colorData = [
  { name: 'Alert', value: 'var(--geist-alert)' },
  { name: 'Purple', value: 'var(--geist-purple)' },
  { name: 'Violet', value: 'var(--geist-violet)' },
  { name: 'Cyan', value: 'var(--geist-cyan)' },
]

export default {
  name: 'ex-color-highlight',

  data: () => ({
    colorData,
  }),

  mixins: [mixins],

  methods: {
    valueToStyle(val, index) {
      if (index < 3) return `background-color: ${val}; color: var(--geist-background);`
      return `background-color: ${val}; color: #000;`
    },
  },
}
</script>

<style lang="stylus" scoped src="./color.styl" />
