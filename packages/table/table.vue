<template lang="pug">
.zi-table(:style="{ width: bodyWidth }")
  .hidden(ref="hiddenColumns")
    slot
  div(
      class="header-wrapper"
      ref="headerWrapper"
      )
    table-header(
      class="header-table"
      ref="tableHeader"
      :store="store"
      :style="{width: layout.bodyWidth + 'px'}")
  div(
      class="body-wrapper"
      ref="bodyWrapper"
      style="{ height: layout.bodyHeight + 'px' }"
  )
    table-body(
    class="body-table"
    ref="tableBody"
    :store="store"
    :empty-text="emptyText"
    :style="{width: layout.bodyWidth + 'px'}")
</template>

<script>
import './table.styl'
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

    emptyText: [String, Boolean],
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

    bindEvent() {
      const { bodyWrapper, headerWrapper } = this.$refs
      bodyWrapper.addEventListener('scroll', function() {
        headerWrapper.scrollLeft = this.scrollLeft
      })
    },
  },

  mounted () {
    this.resizeState = {
      width: this.$el.offsetWidth,
    }
    this.doLayout()
    this.bindEvent()
  },
}
</script>

<style scoped lang="stylus">
.hidden
    display none
</style>
