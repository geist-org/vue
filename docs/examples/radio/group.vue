<template lang="pug">
div
  zi-radio-group(v-model="checked")
    zi-radio(v-for="item in data" :label="item.label" :key="item.label") {{ item.name }}
</template>

<script>
export default {
  name: 'ex-radio-group',

  data: () => ({
    checked: '1',
    data: [{
      label: '1',
      name: 'Sydney',
    }, {
      label: '2',
      name: 'London',
    }, {
      label: '3',
      name: 'China',
    }],
  }),

  watch: {
    checked(val) {
      console.log('ex-radio-basic: ', val)
    },
  },
}
</script>
