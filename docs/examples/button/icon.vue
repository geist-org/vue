<template lang="pug">
div(:class="$style.buttons")
  zi-button(size="small" :icon="geist") action
  zi-button(:iconRight="github") github
  zi-button(size="big" :icon="customIcon") book
</template>

<script>
import geist from '@zeit-ui/vue-icons/packages/geist'
import github from '@zeit-ui/vue-icons/packages/github'

const customIcon = {
  render() {
    return (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style="color: var(--geist-foreground);">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path></svg>)
  },
}

export default {
  name: 'ex-button-icon',

  components: { geist, github, customIcon },

  data: () => ({
    geist,
    github,
    customIcon,
  }),
}
</script>

<style module lang="stylus">
.buttons
  >button
    display block
    margin-bottom 8px
</style>
