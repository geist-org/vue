import Vue from 'vue'

class TableLayout {
  constructor(options) {
    this.table = null
    this.store = null
    this.columns = null

    this.bodyWidth = null
    this.bodyHeight = 0
    Object.keys(options).forEach(key => {
      if (options.hasOwnProperty(key)) this[key] = options[key]
    })

    if (!this.table) {
      throw new Error('table is required for Table Layout')
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout')
    }
  }

  updateColumnWidth() {
    if (Vue.prototype.$isServer) return
    const bodyWidth = this.table.$el.clientWidth
    let bodyMinWidth = 0
    const columns = this.table.columns
    const flexColumns = columns.filter(column => typeof column.width !== 'number')
    const fixedColumns = columns.filter(column => typeof column.width === 'number')

    if (flexColumns.length > 0) {
      fixedBodyWidth = fixedColumns.reduce((total, column) => {
        return total + column.width
      }, 0)
      flexColumns.forEach(column => {
        bodyMinWidth += column.minWidth
      })
      const flexWidth = bodyWidth - bodyMinWidth
      const perFlexWidth = Math.floor(flexWidth / flexColumns.length)
      flexColumns.forEach((flexColumn, index) => {
        columns.forEach(column => {
          if (column.label === flexColumn.label) {
            if (!index) column.realWidth = (flexWidth - perFlexWidth * (flexColumns.length - 1)) + column.minWidth
            else column.realWidth = perFlexWidth + column.minWidth
          }
        })
      })
      this.bodyWidth = Math.max(bodyWidth)
      return
    }
    this.bodyWidth = fixedColumns.reduce((total, column) => {
      return total + column.width
    }, 0)
  }

  onscrollableChange() {

  }
}

export default TableLayout
