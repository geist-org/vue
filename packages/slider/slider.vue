<template lang="pug">
.zi-slider
  .zi-slider-rail(@click="onSliderClick" ref="sliderRail")
  .zi-slider-handler(
    ref="sliderHandler"
    :style="{ left: `${ privateValue }%` }"
    @mousedown="handleMouseDown"
    @mouseup="onDragEnd") {{ privateValue }}
  .zi-slider-dot(v-if="showStops" v-for="dot in dots" :style="{ left: `${ dot }%` }")
</template>

<script>
export default {
  name: 'zi-slider',

  props: {
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 0,
    },
    showStops: Boolean,
  },

  computed: {
    dots() {
      if (this.step !== 1) {
        const dotsNum = Math.floor(100 / this.step) - 1
        const coordinates = []
        for (let i = 1; i <= dotsNum; i++) coordinates.push(this.step * i)
        return coordinates
      }
      return []
    },

    privateValue() {
      if (this.value >= 100) return 100
      if (this.value <= 0) return 0
      return this.value
    },
  },

  data: () => ({
    currentX: 0,
    startX: 0,
    startDrag: false,
  }),

  methods: {
    onSliderClick(event) {
      this.startX = this.$refs.sliderRail.getBoundingClientRect().x
      this.currentX = event.clientX
      this.setValue()
    },

    handleMouseDown(event) {
      this.startDrag = true
      event.preventDefault()
      this.startX = this.$refs.sliderRail.getBoundingClientRect().x
      window.addEventListener('mousemove', this.onDragging)
      window.addEventListener('mouseup', this.onDragEnd)
    },

    onDragging(event) {
      if (!this.startDrag) return
      this.currentX = event.clientX
      this.setValue()
    },

    setValue() {
      const sliderRail = this.$refs.sliderRail
      if (this.privateValue >= 100 && this.currentX >= this.startX + sliderRail.clientWidth) {
        this.$emit('input', 100)
        return
      }
      if (this.privateValue <= 0 && this.currentX < this.startX) {
        this.$emit('input', 0)
        return
      }
      const stepDistance = sliderRail.clientWidth / (100 / this.step)
      this.$emit('input', Math.round((this.currentX - this.startX) / stepDistance) * this.step)
    },

    onDragEnd() {
      this.startDrag = false
      window.removeEventListener('mousemove', this.onDragging)
      window.removeEventListener('mouseup', this.onDragEnd)
    },
  },
}
</script>

<style lang="stylus" scoped src="./slider.styl"></style>
