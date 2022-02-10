<template lang="pug">
div
  zi-toggle(v-model="value" size='mini' style="margin-right: 10px;")
  zi-toggle(v-model="value" size='medium' style="margin-right: 10px;")
  zi-toggle(v-model="value" size='large')
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
