<template lang="pug">
div
  zi-switcher(:options="list" v-model="value")
  p {{ value }}
</template>
<script>
export default {
  name: 'ex-switcher-basic',

  data: () => ({
    value: 1,
    list: [{ label: 'Gitlab', value: 1 }, { label: 'Github', value: 2 }],
  }),
}
</script>
