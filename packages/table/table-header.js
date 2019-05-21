export default {
  name: 'ElTableHeader',

  props: {
    store: {
      required: true,
    },
  },

  render() {
    return (
      <table class="zi-table">
        <colgroup>
          {
            this._l(this.columns, column => <col
              width={ column.realWidth || column.width }/>)
          }
        </colgroup>
        <thead>
          <tr>{
            this._l(this.columns, column => <th>{ column.label || '#' }</th>)
          }
          </tr>
        </thead>
      </table>
    )
  },

  computed: {
    columns() {
      return this.store.states.columns
    },

    table() {
      return this.$parent
    },
  },
}
