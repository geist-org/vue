## Table

Display tabular data in row format.

<ex-code name="ex-table-basic">

Display formatted data in rows and columns.

</ex-code>

<ex-code name="ex-table-delete">

Custom elements can be displayed in the table, and any changes will be immediately rendered.

</ex-code>

<ex-code name="ex-table-width">

You can specify the width of a column. Of course, each of the remaining columns will be resiliently adapted.

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/table.md">

<h3>zi-table</h3>

| Attribute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description | Type | Accepted values | Default
| ------------------------- | ---------- | ---- |  -------------- | ------ |
| **data** | table's content | `Array<string | number>` | - | `[]` |
| **width** | table's width | `string | number` | - | - |
| **empty-text** | displayed text when table's content is empty | `string | boolean` | - | `false` |
| **hover** | table's hover effect  | `boolean` | `true` / `false` | `false` |
| **cell-click**[event] | callback cell's dom by click  | `event` | - | - |
| **row-click**[event] | callback row's content by click  | `event` | - | - |

<br/>
<h3>zi-table-column</h3>

| Attribute | Description | Type | Accepted values | Default
| ---------- | ---------- | ---- |  -------------- | ------ |
| **prop** | table-column's prop | `string` | - | - |
| **label** | table header's content | `string` | - | - |
| **width** | table column's width | `string | number` | - | - |
| **min-width** | table column's min width | `string | number` | - | - |

</ex-footer>
