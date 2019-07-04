<template lang="pug">
div
  zi-progress(:percentage="percentage" fix="top" color="#409eff")
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
