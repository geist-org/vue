<template lang="pug">
.zi-display
  .zi-display-content(:class="{ shadow }" :style="{ width }")
    slot
  .zi-display-caption(v-if="caption || $slots.caption" :class="{ marginLarge: shadow }")
    slot(name="caption") {{ caption }}
</template>

<script>
export default {
  name: 'zi-display',

  props: {
    width: String,
    caption: String,
    shadow: Boolean,
  },
}
</script>

<style lang="stylus" src="./display.styl">
</style>
