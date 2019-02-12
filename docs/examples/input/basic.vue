<template lang="pug">
zi-input(placeholder="placeholder" v-model="value")
</template>

<script>
export default {
  name: 'ex-input-basic',

  data: () => ({
    value: '',
  }),

  watch: {
    value(next) {
      console.log('ex-input-basic: ', next)
    },
  },
}
</script>
