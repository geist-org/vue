<template lang="pug">
.exhibits
  zi-image.blur(
    width="95%"
    src="https://user-images.githubusercontent.com/11304944/75431638-16226a80-5988-11ea-9377-29db6f6b2469.png"
    caption="@zeit-ui/vue-icons"
  )
  .modal
    zi-button.btn(shadow type="success" @click="toIconRepo") Learn more
</template>

<script>
export default {
  name: 'ex-exhibits',

  methods: {
    toIconRepo() {
      window.open('https://vue-icons.zeit-ui.co/')
    },
  },
}
</script>

<style lang="stylus" scoped>
.exhibits
  position relative
  width 100%

.modal
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  display flex
  justify-content center
  align-items center

.blur
  filter blur(2px)

</style>
