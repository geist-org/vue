<template lang="pug">
div(:class="$style.demo")
  zi-button(size="small" @click="network()" type="danger") Set Network
  zi-button(size="small" @click="destroy()" type="success") Destroy
</template>

<script>
export default {
  name: 'ex-toast-handler',

  methods: {
    network() {
      this.$Toast.show({
        type: 'danger',
        action: 'again',
        text: 'Click the button to attempt to reconnect',
        handler: () => alert('Success'),
      })
    },

    destroy() {
      const instance = this.$Toast.show({
        type: 'success',
        action: 'close',
        text: 'Connection successful',
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
