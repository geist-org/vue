<template lang="pug">
div(:class="$style.demo")
  zi-button(size="small" @click="show('success')" type="success") show success
  zi-button(size="small" @click="show('warning')" type="warning") show warning
  zi-button(size="small" @click="show('danger')" type="danger") show danger
  zi-button(size="small" @click="$Toast.danger('The Evil Rabbit jumped over the fence')" type="danger") easy api
</template>

<script>
export default {
  name: 'ex-toast-status',

  methods: {
    show(type) {
      this.$Toast.show({
        type,
        action: 'insert',
        text: 'The Evil Rabbit jumped over the fence',
      })
    },
  },
}
</script>

<style module lang="stylus">
.demo
  button+button
    margin-left 20px
</style>
