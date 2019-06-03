<template lang="pug">
div(class="name")
  zi-radio(v-model="value" label="1" style="margin-right: 20px") Sydney
  zi-radio(v-model="value" label="2") London
</template>

<script>
export default {
  name: 'ex-radio-basic',

  data: () => ({
    value: '1',
  }),

  watch: {
    value(val) {
      console.log('ex-radio-basic: ', val)
    },
  },
}
</script>
