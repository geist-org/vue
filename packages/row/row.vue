<template lang="pug">
.zi-row(:style="styles" :class="classes")
  slot
</template>

<script>
import { enums } from '../utils/validator'

export default {
  name: 'zi-row',

  props: {
    gutter: [Number, String],
    justify: {
      type: String,
      default: 'start',
      validator: enums(['start', 'end', 'center', 'space-around', 'space-between']),
    },
    align: {
      type: String,
      default: 'top',
      validator: enums(['top', 'middle', 'bottom']),
    },
  },

  computed: {
    safeGutter() {
      if (this.gutter === undefined) return this.gutter
      if (typeof this.gutter === 'number') return this.gutter
      if (Number.isNaN(+this.gutter)) {
        console.error('zi-row: [gutter] expected a number.')
        return 0
      }

      return +this.gutter
    },

    styles() {
      const style = {}
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`
        style.marginRight = style.marginLeft
      }
      return style
    },

    classes() {
      let _class = ''
      if (this.justify !== 'start') {
        _class += ` zi-justify-${this.justify}`
      }
      if (this.align !== 'top') {
        _class += ` zi-align-${this.align}`
      }

      return _class
    },
  },
}
</script>

<style lang="stylus">
.zi-row
  display flex
  position relative
  box-sizing border-box

.zi-justify-center
  justify-content center

.zi-justify-end
  justify-content flex-end

.zi-justify-space-around
  justify-content space-around

.zi-justify-space-between
  justify-content space-between

.zi-align-middle
  align-items center

.zi-align-bottom
  align-items flex-end
</style>
