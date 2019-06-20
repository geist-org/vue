<template lang="pug">
.zi-slider(style="width: 60%")
  .zi-slider-rail(@click="onSliderClick" ref="sliderRail")
  .zi-slider-handler(
    ref="sliderHandler"
    :class="isClick ? 'click_animation': ''"
    :style="{ left: `${ privateValue }%` }"
    @mousedown.stop="handleMouseDown"
    @mouseup="onDragEnd") {{ privateValue }}
  .zi-slider-dot(v-if="showStops" v-for="dot in dots" :key="dot" :style="{ left: `${ dot }%` }")
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
        const dotsNum = !(100 % this.step) ? Math.floor(100 / this.step) - 1 : Math.ceil(100 / this.step) - 1
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
    isClick: false,
  }),

  methods: {
    onSliderClick(event) {
      this.isClick = true
      this.startX = this.$refs.sliderRail.getBoundingClientRect().x
      this.currentX = event.clientX
      this.setValue()
    },

    handleMouseDown() {
      this.isClick = false
      this.startDrag = true
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
      const railWidth = this.$refs.sliderRail.clientWidth
      // step divide the rail into n pieces, count per (100/step)'s distance
      const stepDistance = railWidth / (100 / this.step)
      // Calculate the currentX - startX has how many stepDistance, then * step can get the percent of the rail
      let slideDistance = Math.round((this.currentX - this.startX) / stepDistance) * this.step
      if (this.currentX - this.startX <= 0) slideDistance = 0
      if (this.currentX - this.startX >= railWidth) slideDistance = 100
      this.$emit('input', slideDistance)
    },

    onDragEnd() {
      this.startDrag = false
      window.removeEventListener('mousemove', this.onDragging)
      window.removeEventListener('mouseup', this.onDragEnd)
    },
  },
}
</script>

<style lang="stylus" scoped src="./slider.styl"/>
