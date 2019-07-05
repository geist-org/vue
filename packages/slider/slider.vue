<template lang="pug">
.zi-slider(:class="disabled ? 'disabled' : ''")
  .zi-slider-rail(@click="onSliderClick" ref="sliderRail")
    .zi-slider-handler(
      ref="sliderHandler"
      :class="isClick ? 'click_animation': ''"
      :style="{ left: `${ sliderMoveStyle }%` }"
      @mousedown.stop="handleMouseDown"
      @mouseup="onDragEnd"
      @touchstart.stop="handleMouseDown"
      @touchend="onDragEnd") {{ privateValue }}
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
    disabled: Boolean,
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    dots() {
      if (this.step !== 1) {
        const totalPercent = this.max - this.min
        const divideDots = Math.floor(totalPercent / this.step) - 1
        const remainderDots = Math.ceil(totalPercent / this.step) - 1
        const dotsNum = !(totalPercent % this.step) ? divideDots : remainderDots
        const coordinates = []
        for (let i = 1; i <= dotsNum; i++) coordinates.push(this.step * i * 100 / totalPercent)
        return coordinates
      }
      return []
    },

    privateValue() {
      if (this.value >= this.max) return this.max
      if (this.value <= this.min) return this.min
      return Number.isInteger(this.value) ? this.value : this.value.toFixed(1)
    },

    sliderMoveStyle() {
      return (this.privateValue - this.min) * 100 / (this.max - this.min)
    },
  },

  data: () => ({
    currentX: 0,
    startX: 0,
    startDrag: false,
    isClick: false,
    railWidth: 0,
  }),

  watch: {
    max() {
      this.setValue()
    },

    min() {
      this.setValue()
    },
  },

  methods: {
    onSliderClick(event) {
      if (this.disabled) return
      this.isClick = true
      this.resetSize()
      this.startX = this.$refs.sliderRail.getBoundingClientRect().x
      this.currentX = event.clientX
      this.setValue()
    },

    handleMouseDown() {
      if (this.disabled) return
      this.isClick = false
      this.startDrag = true
      this.startX = this.$refs.sliderRail.getBoundingClientRect().x
      window.addEventListener('mousemove', this.onDragging)
      window.addEventListener('touchmove', this.onDragging)
      window.addEventListener('mouseup', this.onDragEnd)
      window.addEventListener('touchend', this.onDragEnd)
    },

    onDragging(event) {
      if (!this.startDrag) return
      this.currentX = event.clientX
      if (event.type === 'touchmove') this.currentX = event.changedTouches[0].clientX
      this.resetSize()
      this.setValue()
    },

    setValue() {
      if (this.max - this.min < 1) {
        console.error('[Slider Error]max is at least 1 larger than min')
        return
      }
      // step divide the rail into n pieces, count per step's distance
      const stepDistance = this.railWidth / (this.max - this.min) * this.step
      // Calculate the currentX - startX has how many stepDistance, then * step can get the percent of the rail
      const slideDistance = Math.round((this.currentX - this.startX) / stepDistance) * this.step + this.min
      let value = Number.isInteger(slideDistance) ? slideDistance : Number.parseFloat(slideDistance.toFixed(1))
      if (this.currentX - this.startX <= 0) value = this.min
      if (this.currentX - this.startX >= this.railWidth) value = this.max
      this.$emit('input', value)
    },

    onDragEnd() {
      this.startDrag = false
      window.removeEventListener('mousemove', this.onDragging)
      window.removeEventListener('mouseup', this.onDragEnd)
      window.removeEventListener('touchmove', this.onDragging)
      window.removeEventListener('touchend', this.onDragEnd)
    },

    resetSize() {
      if (this.$refs.sliderRail) this.railWidth = this.$refs.sliderRail.clientWidth
    },
  },

  mounted() {
    this.resetSize()
    window.addEventListener('resize', this.resetSize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resetSize)
  },
}
</script>

<style lang="stylus" scoped src="./slider.styl"/>
