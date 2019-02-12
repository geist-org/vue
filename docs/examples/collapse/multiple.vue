<template lang="pug">
div
  zi-collapse(v-model="value" accordion)
    zi-collapse-item(title="Question A")
      p Answer A
    zi-collapse-item(title="Question B")
      p Answer B
</template>

<script>
export default {
  name: 'ex-collapse-multiple',

  data: () => ({
    value: '',
  }),

  watch: {
    value(next) {
      console.log('ex-collapse-multiple: ', next)
    },
  },
}
</script>
