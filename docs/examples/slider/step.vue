<template lang="pug">
zi-slider(style="width: 60%" v-model="value" :step="0.2" :show-stops="true" :min="0" :max="1")
</template>

<script>
export default {
  name: 'ex-slider-step',

  data: () => ({
    value: 0,
  }),

  watch: {
    value(val) {
      console.log(val)
    },
  },
}
</script>
