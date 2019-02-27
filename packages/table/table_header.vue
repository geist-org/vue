<template lang="pug">
thead
  tr
    th(v-for="(column, index) in columns" :key="index") {{ column.label }}
</template>

<script>
export default {
  name: 'zi-table-header',

  props: {
    store: {
      required: true,
    },
  },

  computed: {
    columns() {
      return this.store.states.columns
    },
  },
}
</script>
