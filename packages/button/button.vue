<template lang="pug">
button.zi-btn(@click="clickHandler")
  zi-button-drip(ref="drip")
  slot
</template>

<script>
import ZiButtonDrip from './button_drip'

export default {
  name: 'zi-button',

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

