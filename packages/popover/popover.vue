<template lang="pug">
.popover(
  @click.stop
  @mousemove="hoverToggle(true)"
  @mouseleave="hoverToggle(false)"
)
  span.host(@click.stop="toggle")
    slot
  transition(name="zi-fade-in")
    .dropdown(:class="align" v-show="visible")
      PopoverIcon.icon
      .slot-container
        slot(name="dropdown")
</template>

<script>
import PopoverIcon from './popover-icon'
import { validator } from '../utils'

export default {
  name: 'zi-popover',

  components: { PopoverIcon },

  data: () => ({
    visible: false,
  }),

  props: {
    align: {
      type: String,
      validator: validator.enums(['left', 'right', 'center']),
      default: 'center',
    },
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    hoverable: Boolean,
    delay: [Number, String],
  },

  methods: {
    toggle() {
      if (this.hoverable) return

      this.visible = !this.visible
      document.removeEventListener('click', this.globalHandler)
      if (this.visible) {
        document.addEventListener('click', this.globalHandler)
      }
    },

    hoverToggle(next) {
      if (!this.hoverable) return

      const t = Number.isNaN(+this.delay) ? 300 : +this.delay
      if (next) {
        this.timer && clearTimeout(this.timer)
        this.visible = true
        return
      }
      this.timer = setTimeout(() => {
        this.visible = false
        clearTimeout(this.timer)
      }, t)
    },

    globalHandler() {
      this.visible = false
    },

    childTrigger(command) {
      this.$emit('command', command)
      if (this.hideOnClick) {
        document.removeEventListener('click', this.globalHandler)
        this.visible = false
      }
    },
  },
}
</script>

<style scoped lang="stylus" src="./popover.styl"></style>
