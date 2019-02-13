<template lang="pug">
div
  zi-switcher(:options="list" v-model="value")
  br
  zi-switcher(:options="list2" v-model="value")
</template>
<script>
export default {
  name: 'ex-switcher-basic',

  data: () => ({
    value: 1,
    value2: 3,
    list: [{ label: 'Gitlab', value: 1 }, { label: 'Github', value: 2 }],
    list2: ['Gitlab', 'Github'],
  }),
}
</script>
