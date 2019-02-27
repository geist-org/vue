import Table from './table'
import TableHeader from './table_header'
import TableColumn from './table_column'
import TableBody from './table_body'

Table.install = vue => {
  vue.component(Table.name, Table)
  vue.component(TableHeader.name, TableHeader)
  vue.component(TableColumn.name, TableColumn)
  vue.component(TableBody.name, TableBody)
}

export default Table
