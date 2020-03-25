<template lang="pug">
div
  zi-progress.progress(:value="30" :colors="[{ value: 0, color: '#f56c6c' }]")
  br
  zi-progress.progress(:value="percentage" :colors="progressColor")
  zi-button.button(@click="percentage += 8" size="small") increase
  zi-button.button(@click="percentage = 10" size="small" type="primary") reset
</template>

<script>
export default {
  name: 'ex-progress-colors',

  data: () => ({
    percentage: 10,
    progressColor: [{
      value: '30',
      color: '#f56c6c',
    }, {
      value: 0,
      color: '#fff',
    }, {
      value: 70,
      color: '#ccc',
    }, {
      value: 100,
      color: '#67c23a',
    }],
  }),
}
</script>

<style lang="stylus" scoped>
  .progress
    margin-bottom 15px

  .button
    margin-top 5px
    margin-left 8px
</style>
