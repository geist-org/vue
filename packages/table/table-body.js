export default {
  name: 'zi-table-body',

  props: {
    store: {
      required: true,
    },

    isHover: [Boolean],

    emptyText: [String, Boolean],
  },

  render(h) {
    return (
      <table class="zi-table">
        <colgroup>
          {
            this._l(this.columns, column => <col width={ column.realWidth || column.width }/>)
          }
        </colgroup>
        <tbody>
          {
            this.data.length ? this._l(this.data, (row, $index) => [<tr class={ this.isHover ? 'table-row' : '' } on-click={ $event => this.handleClick($event, row) }>
              {
                this._l(this.columns, column => <td>{
                  column.renderCell.call(this._renderProxy, h, { row , column, $index })
                }</td>)
              }</tr>]) : <tr><td style="color:#ccc; text-align:center">{ this.emptyText || '没有数据' }</td></tr>
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

  methods: {
    getCell(event) {
      let cell = event.target
      while (cell && cell.tagName.toUpperCase() !== 'HTML') {
        if (cell.tagName.toUpperCase() === 'TD') {
          return cell
        }
        cell = cell.parentNode
      }
      return null
    },

    handleClick(event, row) {
      const table = this.table
      const cell = this.getCell(event)
      if (cell) {
        table.$emit('cell-click', cell, row, event)
      }
      this.store.commit('setCurrentRow', row)
      table.$emit('row-click', row, event);
    },
  },
}
