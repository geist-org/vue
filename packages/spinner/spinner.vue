<template lang="pug">
.zi-spinner(:class="[size && size, { auto }]")
  .zi-spinner-container
    .zi-spinner-bar(v-for="index in 12" :key="`zi-spinner-bar-${index}`")
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-spinner',

  props: {
    size: {
      type: String,
      validator: validator.enums(['mini', 'small', 'normal', 'big']),
    },
    auto: Boolean,
  },
}
</script>

<style lang="stylus" src="./spinner.styl" />
