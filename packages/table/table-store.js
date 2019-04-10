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
      return
    }
    columnArray.push(column)
  },
}

TableStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations
  if (!mutations[name]) throw new Error(`action not found: ${name}`)
  mutations[name].apply(this, [this.states].concat(args))
}

export default TableStore
