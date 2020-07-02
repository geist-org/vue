import Vue from 'vue'

class TableLayout {
  constructor(options) {
    this.table = null
    this.store = null
    this.columns = null
    this.bodyWidth = null

    Object.keys(options).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        this[key] = options[key]
      }
    })

    if (!this.table) throw new Error('table is required for Table Layout')

    if (!this.store) throw new Error('store is required for Table Layout')
  }

  updateColumnWidth() {
    if (Vue.prototype.$isServer) return
    const bodyWidth = this.table.$el.clientWidth
    const columns = this.table.columns
    const flexColumns = columns.filter(column => typeof column.width !== 'number')
    const fixedColumns = columns.filter(column => typeof column.width === 'number')
    const fixedBodyWidth = fixedColumns.reduce((total, column) => total + column.width, 0)

    if (flexColumns.length > 0) {
      const bodyMinWidth = flexColumns.reduce(
        (total, column) => total + column.minWidth,
        fixedBodyWidth,
      )

      if (fixedBodyWidth > bodyWidth) {
        this.bodyWidth =
          fixedBodyWidth + flexColumns.reduce((total, column) => total + column.minWidth, 0)
        return
      }

      const flexBodyWidth = bodyWidth - bodyMinWidth
      const averageWidth = Math.floor(flexBodyWidth / flexColumns.length)
      flexColumns.forEach((flexColumn, index) => {
        if (!index) {
          flexColumn.realWidth =
            flexBodyWidth - averageWidth * (flexColumns.length - 1) + flexColumn.minWidth
          return
        }
        flexColumn.realWidth = averageWidth + flexColumn.minWidth
      })
      this.bodyWidth = Math.max(bodyWidth)
      return
    }
    this.bodyWidth = fixedBodyWidth
  }
}

export default TableLayout
