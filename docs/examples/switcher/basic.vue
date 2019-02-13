<template lang="pug">
div
  zi-switcher(:options="list" v-model="value")
  br
  p {{ value }}
  zi-switcher(:options="list2" v-model="value2")
  p {{ value2 }}
</template>
<script>
export default {
  name: 'ex-switcher-basic',

  data: () => ({
    value: 1,
    value2: 2,
    list: [{ label: 'Gitlab', value: 1 }, { label: 'Github', value: 2 }],
    list2: [{ label: 'Gitlab', value: 1 }, { label: 'Github', value: 2 }, { label: 'Coding', value: 3 }],
  }),
}
</script>
