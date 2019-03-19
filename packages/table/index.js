import Table from './table'
import TableColumn from './table-column'

Table.install = vue => {
  vue.component(Table.name, Table)
  vue.component(TableColumn.name, TableColumn)
}

export default Table
