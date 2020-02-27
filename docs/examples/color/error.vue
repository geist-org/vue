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
  { name: 'Light', value: 'var(--geist-error-light)' },
  { name: 'Default', value: 'var(--geist-error)' },
  { name: 'Dark', value: 'var(--geist-error-dark)' },
]

export default {
  name: 'ex-color-error',

  data: () => ({
    colorData,
  }),

  mixins: [mixins],
}
</script>

<style lang="stylus" scoped src="./color.styl" />
