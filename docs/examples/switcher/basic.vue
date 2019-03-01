<template lang="pug">
div
  zi-switcher(:options="list" v-model="value")
  br
  br
  zi-card(v-for="item in list" v-if="value === item.value" :dark="value === 2")
    p {{ item.label }}
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
