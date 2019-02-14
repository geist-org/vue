<template lang="pug">
zi-rate(v-model="value")
</template>

<script>
export default {
  name: 'ex-rate-basic',

  data: () => ({ value: 1 }),

  watch: {
    value(next) {
      console.log('ex-rate-basic: ', next)
    },
  },
}
</script>
