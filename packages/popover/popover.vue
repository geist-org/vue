<template lang="pug">
.zi-popover(@click.stop)
  span.zi-popover-host(@click.stop="toggle")
    slot
  transition(name="zi-fade-in")
    .zi-popover-dropdown(:class="align" v-show="visible")
      slot(name="dropdown")
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-popover',

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
