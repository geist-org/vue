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
  { name: 'Background', value: 'var(--geist-background)' },
  { name: 'Accent 1', value: 'var(--accents-1)' },
  { name: 'Accent 2', value: 'var(--accents-2)' },
  { name: 'Accent 3', value: 'var(--accents-3)' },
  { name: 'Accent 4', value: 'var(--accents-4)' },
  { name: 'Accent 5', value: 'var(--accents-5)' },
  { name: 'Accent 6', value: 'var(--accents-6)' },
  { name: 'Accent 7', value: 'var(--accents-7)' },
  { name: 'Accent 8', value: 'var(--accents-8)' },
  { name: 'Foreground', value: 'var(--geist-foreground)' },
]

export default {
  name: 'ex-color-primary',

  data: () => ({
    colorData,
  }),

  mixins: [mixins],

  mounted() {
    document.addEventListener('click', this.updateHandle)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.updateHandle)
  },

  methods: {
    updateHandle(event) {
      if (!event.target) return
      if (event.target.id === 'toggle-theme') {
        this.$forceUpdate()
      }
    },

    valueToStyle(val, index) {
      const bg = `background-color: ${val};`
      if (index < 5) return bg
      return `${bg} color: var(--geist-background);`
    },
  },
}
</script>

<style lang="stylus" scoped src="./color.styl" />
