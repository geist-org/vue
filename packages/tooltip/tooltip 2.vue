<template lang="pug">
.zi-tooltip(ref="host"
  @mousemove="toggle(true)"
  @mouseleave="toggle(false)"
  @click.stop="clickHandler"
)
  slot
  .zi-tooltip-box(ref="inner" :class="{ visible }")
    .zi-tooltip-arrow(ref="arrow")
    .zi-tooltip-inner
      template(v-if="hasSlot")
        slot(name="content")
      template(v-else) {{ content }}
</template>

<script>
import Popper from 'popper.js'
import { enums } from '../utils/validator'

export default {
  name: 'zi-tooltip',

  data: () => ({
    visible: false,
  }),

  props: {
    content: String,
    placement: {
      type: String,
      default: 'bottom',
      validator: enums([
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end',
      ]),
    },
    clickable: Boolean,
    delay: Number,
  },

  computed: {
    hasSlot() {
      return !!this.$slots.content
    },
  },

  mounted() {
    new Popper(this.$refs.host, this.$refs.inner, {
      placement: this.placement,
      modifiers: {
        arrow: {
          element: this.$refs.arrow,
        },
        offset: {
          offset: '0, 8',
        },
      },
    })
  },

  beforeDestroy() {
    document.removeEventListener('click', this.hide)
    clearTimeout(this.timer)
  },

  methods: {
    toggle(next) {
      if (this.clickable) return

      if (this.delay) {
        const t = Number.isNaN(+this.delay) ? 0 : +this.delay
        if (next) {
          clearTimeout(this.timer)
          this.visible = true
        }
        this.timer = setTimeout(() => {
          this.visible = false
          clearTimeout(this.timer)
        }, t)
        return
      }

      this.visible = next
    },

    clickHandler() {
      if (!this.clickable) return
      this.visible = !this.visible
      document.removeEventListener('click', this.hide)
      if (this.visible) {
        document.addEventListener('click', this.hide)
      }
    },

    hide() {
      this.visible = false
    },
  },
}
</script>

<style lang="stylus" src="./tooltip.styl"/>
