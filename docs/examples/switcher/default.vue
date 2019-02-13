<template lang="pug">
div
  zi-switcher(:options="list" :value="value")
  p {{ value }}
</template>
<script>
export default {
  name: 'ex-switcher-default',

  data: () => ({
    value: 'Coding',
    list: ['Gitlab', 'Github', 'Coding'],
  }),
}
</script>
