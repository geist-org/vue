<template lang="pug">
.icons
  zi-input(placeholder="placeholder" size="mini")
    template(v-slot:prefixIcon)
      github

  br
  zi-input(placeholder="placeholder")
    template(v-slot:prefixIcon)
      github

  br
  zi-input(placeholder="placeholder" size="big")
    template(v-slot:prefixIcon)
      github
  br
  zi-input(placeholder="placeholder")
    template(v-slot:suffixIcon)
      gift
</template>

<script>
import github from '@zeit-ui/vue-icons/packages/github'
import gift from '@zeit-ui/vue-icons/packages/gift'

export default {
  name: 'ex-input-icon',

  components: {
    github,
    gift,
  },
}
</script>

<style scoped lang="stylus">
.icons
  >div
    margin-bottom 14px
</style>
