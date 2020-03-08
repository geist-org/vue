<template lang="pug">
div
  zi-switcher
    zi-switcher-item(v-for="label in labels" :label="label" :key="label")
      .zi-comment the current choice is {{ label }}
</template>
<script>
export default {
  name: 'ex-switcher-multiple',
  data: () => ({
    labels: ['Gitlab', 'Github', 'Coding', 'Gitea'],
  }),
}
</script>
