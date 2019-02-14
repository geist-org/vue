<template lang="pug">
div
  zi-switcher(:options="list" :value="value")
  br
  zi-switcher(:options="list2" :value="value2")
</template>
<script>
export default {
  name: 'ex-switcher-multiple',

  data: () => ({
    value: 'Coding',
    value2: 'Gitea',
    list: ['Gitlab', 'Github'],
    list2: ['Gitlab', 'Github', 'Coding', 'Gitea'],
  }),
}
</script>
