<template lang="pug">
div
  zi-checkbox(v-model="value") Sydney
</template>

<script>
export default {
  name: 'ex-checkbox-basic',

  data: () => ({
    value: false,
  }),

  watch: {
    value(val) {
      console.log('ex-checkbox-basic: ', val)
    },
  },
}
</script>
