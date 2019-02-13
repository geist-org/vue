<template lang="pug">
zi-select(v-model="value")
  zi-option(value="First option")
  zi-option(value="Second option")
</template>

<script>
export default {
  name: 'ex-select-basic',

  data: () => ({
    value: 'First option',
  }),

  watch: {
    value(next) {
      console.log('ex-input-basic: ', next)
    },
  },
}
</script>
