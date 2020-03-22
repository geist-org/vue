<template lang="pug">
div(:class="$style.buttons")
  zi-button(size="small" :icon="geist") action
  zi-button(:iconRight="github") github
  zi-button(size="big" :icon="database") database
</template>

<script>
import geist from '@zeit-ui/vue-icons/packages/geist'
import github from '@zeit-ui/vue-icons/packages/github'
import database from '@zeit-ui/vue-icons/packages/database'

export default {
  name: 'ex-button-icon',

  components: { geist, github, database },

  data: () => ({
    geist,
    github,
    database,
  }),
}
</script>

<style module lang="stylus">
.buttons
  >button
    display block
    margin-bottom 8px
</style>
