<template lang="pug">
span.zi-tag(:class="type")
  slot
</template>
<script>
import { validator } from '../utils'

export default {
  name: 'zi-tag',

  props: {
    type: {
      type: String,
      validator: validator.enums(['success', 'warning', 'danger']),
    },
  },
}
</script>
