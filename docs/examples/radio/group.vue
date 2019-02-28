<template lang="pug">
div
  zi-radio-group(v-model="checked")
    zi-radio(v-for="item in data" :label="item.label" :key="item.value") {{ item.name }}
</template>

<script>
export default {
  name: 'ex-radio-group',

  data: () => ({
    checked: '1',
    data: [{ label: '1', name: 'BaiJing' }, { label: '2', name: 'DongBai' }, { label: '3', name: 'HeLan' }],
  }),

  watch: {
    checked(val) {
      console.log('ex-radio-basic: ', val)
    },
  },
}
</script>
