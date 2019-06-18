<template lang="pug">
div
  zi-progress.progress(:percentage="30" color="#f56c6c")
  zi-progress.progress(:percentage="percentage" :color="progressColor")
  zi-button.button(@click="percentage += 8" size="small") add
</template>

<script>
export default {
  name: 'ex-progress-color',

  data: () => ({
    percentage: 10,
    progressColor: [{
      num: 50,
      color: '#409eff',
    }, {
      num: '50',
      color: '#f56c6c',
    }, {
      num: 25,
      color: '#fff',
    }, {
      num: 75,
      color: '#ccc',
    }, {
      num: 100,
      color: '#67c23a',
    }],
  }),
}
</script>

<style lang="stylus" scoped>
.progress
  margin-bottom 15px

.button
  display block
  margin-top 5px
</style>
