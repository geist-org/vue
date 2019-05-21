<template lang="pug">
span.zi-avatar(:class="[shape, size && size, isSingleText && 'single', stacked && 'stacked']")
  img(:src="src" v-if="hasLink" draggable="false")
  span.zi-avatar-string(v-else) {{ text }}
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-avatar',

  props: {
    stacked: Boolean,
    src: String,
    text: String,
    size: {
      type: String,
      validator: validator.enums(['small', 'medium', 'big', 'huge']),
    },
    shape: {
      type: String,
      validator: validator.enums(['circle', 'square']),
      default: 'circle',
    },
  },

  computed: {
    hasLink() {
      return !!this.src
    },

    isSingleText() {
      return this.text && this.text.length === 1
    },
  },
}
</script>

