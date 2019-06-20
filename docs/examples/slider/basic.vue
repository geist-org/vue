<template lang="pug">
zi-slider(v-model="value")
</template>

<script>
export default {
  name: 'ex-slider-basic',

  data: () => ({
    value: 14,
  }),

  watch: {
    value(val) {
      console.log(val)
    },
  },
}
</script>
