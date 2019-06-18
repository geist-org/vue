<template lang="pug">
div
  zi-progress(:percentage="percentage" fix="top" color="#409eff")
  h5 This fixed progress bar is displayed at the top of the page.
  zi-button(@click="percentage += 5" size="small") loading progress
</template>

<script>
export default {
  name: 'ex-progress-fixed',

  data: () => ({
    percentage: 20,
  }),
}
</script>
