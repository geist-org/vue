<template lang="pug">
div
  zi-checkbox-group(v-model="checkedValues")
    zi-checkbox(v-for="city in values" :label="city" :key="city")
</template>

<script>
export default {
  name: 'ex-checkbox-group',

  data: () => ({
    values: ['Shanghai', 'Sydney', 'London', 'Tokyo'],
    checkedValues: ['Sydney', 'London'],
  }),

  watch: {
    checkedValues(val) {
      console.log('ex-checkbox-group: ', val)
    },
  },
}
</script>
