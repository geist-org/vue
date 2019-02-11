<template lang="pug">
button.zi-btn(@click="clickHandler" :class="type && type")
  zi-button-drip(ref="drip")
  slot
</template>

<script>
import ZiButtonDrip from './button_drip'
import { validator } from '../utils'

export default {
  name: 'zi-button',

  props: {
    type: {
      type: String,
      validator: validator.enums(['primary', 'success', 'warning', 'danger']),
    }
  },

  data: () => ({
    dripStyles: '',
  }),

  components: { ZiButtonDrip },

  methods: {
    clickHandler(event) {
      this.$refs.drip && this.$refs.drip.trigger(event)
    },
  },
}
</script>

