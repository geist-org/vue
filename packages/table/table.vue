<template lang="pug">
table.zi-table
  zi-table-header(:store="store")
  zi-table-body(:store="store")
  slot
</template>

<script>
import { TableStore } from './table_store'

let tableIdSeed = 1

export default {
  name: 'zi-table',

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    data: {
      immediate: true,
      handler(value) {
        this.store.commit('setData', value)
      },
    },
  },

  data() {
    const store = new TableStore(this)
    return { store }
  },

  created() {
    this.tableId = 'zi-table_' + tableIdSeed++
  },
}
</script>
