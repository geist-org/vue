<template lang="pug">
.zi-table(:style="{ width: bodyWidth }")
  .hidden(ref="hiddenColumns")
    slot
  table-header(ref="zi-table-header" :store="store" :style="{ width: layout.bodyWidth + 'px' }")
  table-body(:store="store")
</template>

<script>
import TableStore from './table-store'
import TableHeader from './table-header'
import TableBody from './table-body'
import TableLayout from './table-layout'

export default {
  name: 'zi-table',

  components: { TableHeader, TableBody },

  props: {
    data: {
      type: Array,
      default: () => [],
    },

    width: [String, Number],
  },

  computed: {
    columns() {
      return this.store.states.columns
    },

    bodyWidth() {
      if (Number.isNaN(Number(this.width))) return this.width
      return this.width + 'px'
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
    const layout = new TableLayout({
      store,
      table: this,
    })
    return {
      layout,
      store,
      resizeState: {
        width: null,
      },
    }
  },

  methods: {
    doLayout() {
      this.layout.updateColumnWidth()
    },
  },

  mounted () {
    this.resizeState = {
      width: this.$el.offsetWidth,
    }
    this.doLayout()
  },
}
</script>

<style scoped lang="stylus">
.hidden
  display none
</style>
