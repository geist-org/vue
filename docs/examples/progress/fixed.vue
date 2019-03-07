<template lang="pug">
div
  zi-progress(:percentage="percentage" fix="top" color="#409eff")
  zi-button(@click="percentage += 5" size="small") loading progress
  p this fixed progress bar is displayed at the top of the page.
</template>

<script>
export default {
  name: 'ex-progress-fixed',

  data: () => ({
    percentage: 20,
  }),
}
</script>
