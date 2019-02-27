<script>
export default {
  name: 'zi-table-body',

  props: {
    store: {
      required: true,
    },
  },

  computed: {
    data() {
      return this.store.states.data
    },

    columns() {
      return this.store.states.columns
    },
  },

  render(h) {
    return h('tbody', {}, this.data.map(row => {
      return h('tr', {}, this.columns.map(column => {
        if (column.renderCell) {
          return h('td', {}, [(() => {
            return column.renderCell.call(this._renderProxy, h, row)()
          })()])
        }
        return h('td', row[column.prop])
      }))
    }))
  },
}
</script>
