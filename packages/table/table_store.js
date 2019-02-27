export class TableStore {
  constructor(table) {
    if (!table) {
      throw new Error('Table is required.')
    }

    this.table = table

    this.states = {
      columns: [],
      data: {},
    }
  }

  mutations = {
    setData(states, data) {
      states.data = data
    },

    insertColumn(states, column) {
      const array = states.columns
      array.push(column)
    },
  }

  commit(name, ...args) {
    const mutations = this.mutations
    if (mutations[name]) {
      mutations[name].apply(this, [this.states].concat(args))
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  }
}
