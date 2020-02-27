<template lang="pug">
.colors
  .color(v-for="color of colorData"
    :key="color.name"
    :style="valueToStyle(color.value)"
    ref="color"
  )
    h4(@click="copy(color.name)") {{ color.name }}
    span.value(@click="copy(color.value)") {{ color.value }}
    span.cssValue(@click="copy(getCSSValue(color.value))") {{ getCSSValue(color.value) }}
</template>

<script>
import mixins from './_mixin'

const colorData = [
  { name: 'Light', value: 'var(--geist-success-light)' },
  { name: 'Default', value: 'var(--geist-success)' },
  { name: 'Dark', value: 'var(--geist-success-dark)' },
]

export default {
  name: 'ex-color-success',

  data: () => ({
    colorData,
  }),

  mixins: [mixins],
}
</script>

<style lang="stylus" scoped src="./color.styl" />
