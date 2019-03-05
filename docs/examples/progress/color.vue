<template lang="pug">
div
  zi-progress(:percentage="30" color="#f56c6c")
  br
  zi-progress(:percentage="percentage" :color="progressColor")
  zi-button(@click="percentage += 5" size="small") add
</template>

<script>
export default {
  name: 'ex-progress-color',

  data: () => ({
    percentage: 0,
    progressColor: [{num: 0, color: '#409EFF'}, {num: 50, color: '#f56c6c'}, {num: 100, color: '#67c23a'}],
  }),
}
</script>
