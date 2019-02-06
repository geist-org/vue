<template lang="pug">
span.zi-avatar(:class="[shape, size && size, isSingleText && 'single']")
  img(:src="src" v-if="hasLink")
  span.zi-avatar-string(v-else) {{ text }}
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-avatar',

  props: {
    src: { type: String },
    text: { type: String },
    size: {
      type: String,
      validator: validator.enums(['small', 'big', 'huge']),
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

