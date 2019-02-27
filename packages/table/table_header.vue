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

  render(h) {
    return h('thead', {}, [
      h('tr', {}, this.columns.map((column) => {
        let header
        if (column.renderHeader) {
          header = column.renderHeader.call(this._renderProxy, h, column)
        }
        return h('th', { attrs: { width: column.width } }, [ header ? header() : column.label ])
      })),
    ])
  },
}
</script>
