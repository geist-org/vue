<template lang="pug">
div
  zi-progress(:percentage="30" color="#f56c6c")
  br
  zi-progress(:percentage="percentage" :color="progressColor")
  br
  zi-button(@click="percentage += 8" size="small") add
</template>

<script>
export default {
  name: 'ex-progress-color',

  data: () => ({
    percentage: 10,
    progressColor: [{num: 50, color: '#409eff'}, {num: '50', color: '#f56c6c'}, {num: 25, color: '#fff'}, {num: 75, color: '#ccc'}, {num: 100, color: '#67c23a'}],
  }),
}
</script>
