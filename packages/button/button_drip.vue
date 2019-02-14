<template lang="pug">
span(:class="$style.drip" :style="styles" v-if="show")
</template>

<script>
import { bounding } from '../utils'
const DEFAULT_STYLES = {
  left: '',
  top: '',
  opacity: .8,
  transform: 'translate(-50%, -50%)',
}

export default {
  name: 'zi-button-drip',

  props: ['clickEvent'],

  data: () => ({
    show: false,
    styles: DEFAULT_STYLES,
  }),

  methods: {
    trigger(event) {
      if (!event || typeof event !== 'object') return
      if (!event.offsetX && !event.offsetY) return
      if (this.show) return
      this.show = true
      this.$nextTick(() => this.setStyle(event))
    },

    setStyle(event) {
      const { width, height } = bounding.getRect(this.$parent.$el)
      const limitX = Math.max(event.offsetX, width - event.offsetX)
      const limitY = Math.max(event.offsetY, height - event.offsetY)
      const limit = Math.max(limitX, limitY)
      const scale = limit / 9

      this.styles = {
        left: `${event.offsetX}px`,
        top: `${event.offsetY}px`,
        opacity: 0.25,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }

      const timer = setTimeout(() => {
        this.reset()
        clearTimeout(timer)
      }, 400)
    },

    reset() {
      this.styles = DEFAULT_STYLES
      this.show = false
    },
  },
}
</script>

<style module lang="stylus">
.drip
  position absolute
  transform translate(-50%, -50%)
  top -100%
  left -100%
  width 20px
  height 20px
  border-radius 50%
  background-color #ddd
  transition-property opacity, transform
  transition-duration .3s
  transition-timing-function ease-in
</style>
