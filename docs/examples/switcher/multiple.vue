<template lang="pug">
div
  zi-switcher(:options="list" v-model="value")
  br
  br
  zi-card(v-for="(item, index) in list" v-show="item === value" :dark="(index % 2) === 0")
    p {{ item }}
</template>
<script>
export default {
  name: 'ex-switcher-multiple',

  data: () => ({
    value: 'Coding',
    list: ['Gitlab', 'Github', 'Coding', 'Gitea'],
  }),
}
</script>
