<template lang="pug">
zi-toggle(v-model="value")
</template>

<script>
export default {
  name: 'ex-toggle-basic',

  data: () => ({ value: true }),

  watch: {
    value(next) {
      console.log('ex-input-basic: ', next)
    },
  },
}
</script>
