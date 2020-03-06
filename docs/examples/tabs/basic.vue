<template lang="pug">
zi-tabs(@label-selected="selectHandler")
  zi-tabs-item(v-for="item in items" :label="item.label" :value="item.value")
    zi-note {{ `${item.label} content` }}
</template>

<script>
export default {
  name: 'ex-tabs-basic',

  data: () => ({
    items: [
      { label: 'Setting', value: 'setting' },
      { label: 'Lambda', value: 'lambda' },
      { label: 'Git', value: 'git' },
    ],
  }),

  methods: {
    selectHandler(item) {
      console.log(item)
    },
  },
}
</script>
