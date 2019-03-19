export default {
  name: 'zi-table-body',

  props: {
    store: {
      required: true,
    },
  },

  render(h) {
    return (
      <table class="zi-table">
        <colgroup>
          {
            this._l(this.columns, column => <col width={ column.realWidth ? column.realWidth : column.width }/>)
          }
        </colgroup>
        <tbody>
          {
            this._l(this.data, (row, $index) => [<tr>
              {
                this._l(this.columns, (column) => {
                  return <td>{
                    column.renderCell.call(this._renderProxy, h, { row, column, $index })
                  }</td>
                })
              }</tr>])
          }
        </tbody>
      </table>
    )
  },

  computed: {
    table() {
      return this.$parent
    },

    data() {
      return this.store.states.data
    },

    columns() {
      return this.store.states.columns
    },
  },
}
