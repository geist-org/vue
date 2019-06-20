<template lang="pug">
.popover(@click.stop)
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
  },

  methods: {
    toggle() {
      this.visible = !this.visible
      document.removeEventListener('click', this.globalHandler)
      if (this.visible) {
        document.addEventListener('click', this.globalHandler)
      }
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

<style scoped lang="stylus" src="./popover.styl">
</style>
