<template lang="pug">
div
  zi-slider(v-model="value1" :min="5" :max="30" style="width: 60%")
  br
  br
  br
  zi-slider(v-model="value2" :min="0" :max="1" :step="0.1" style="width: 60%")
</template>

<script>
export default {
  name: 'ex-slider-range',

  data: () => ({
    value1: 9,
    value2: 0.3,
  }),

  watch: {
    value1(val) {
      console.log('first slider`s value: ', val)
    },

    value2(val) {
      console.log('second slider`s value: ', val)
    },
  },
}
</script>
