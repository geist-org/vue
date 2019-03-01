<template lang="pug">
div
  table.zi-table
    zi-table-header(:store="store")
    zi-table-body(:store="store")
    slot
  div(v-if="!data || data.length === 0" :class="$style.empty")
    span
      slot(name="empty") {{ emptyText || 'empty data' }}
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
    emptyText: String,
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

<style module lang="stylus">
.empty
  padding 1rem
  text-align center
</style>
