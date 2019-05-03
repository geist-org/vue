<template lang="pug">
div(:class="$style.demo")
  zi-button(size="small" @click="network()" type="danger") set network
  zi-button(size="small" @click="destory()" type="success") destory
</template>

<script>
export default {
  name: 'ex-toast-handler',

  methods: {
    network() {
      this.$Toast.show({
        type: 'danger',
        action: 'again',
        text: 'click to try to reconnect',
        handler: () => alert('ok'),
      })
    },

    destory() {
      const instance = this.$Toast.show({
        type: 'success',
        action: 'close',
        text: 'successful connection',
        handler: () => instance.close(),
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
