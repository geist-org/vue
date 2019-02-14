<template lang="pug">
div
  zi-button(size="small" @click="show") show action
</template>

<script>
export default {
  name: 'ex-toast-action',

  methods: {
    show() {
      this.$Toast.show({
        text: 'The Evil Rabbit jumped over the fence',
        action: 'insert',
      })
    },
  },
}
</script>
