const TableStore = function (table) {
  if (!table) throw new Error('table is required')
  this.table = table
  this.states = {
    columns: [],
    data: null,
    width: null,
  }
}

TableStore.prototype.mutations = {
  setData(states, data) {
    states.data = data
  },

  insertColumns(states, column, index) {
    const columnArray = states.columns
    if (typeof index !== 'undefined') {
      columnArray.splice(index, 0, column)
    } else {
      columnArray.push(column)
    }
  },
}

TableStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args))
    return
  }
  throw new Error(`action not found: ${name}`)
}

export default TableStore
