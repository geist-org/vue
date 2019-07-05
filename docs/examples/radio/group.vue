<template lang="pug">
div
  zi-radio-group(v-model="checked")
    zi-radio(v-for="item in data" :label="item.label" :description="item.description" :key="item.label") {{ item.name }}
</template>

<script>
export default {
  name: 'ex-radio-group',

  data: () => ({
    checked: '1',
    data: [{
      label: '1',
      name: 'BaiJing',
      description: 'Description for option1',
    }, {
      label: '2',
      name: 'DongBai',
    }, {
      label: '3',
      name: 'HeLan',
    }],
  }),

  watch: {
    checked(val) {
      console.log('ex-radio-basic: ', val)
    },
  },
}
</script>
