# Table

## Examples

<ex-code name="ex-table-basic"></ex-code>

<ex-code name="ex-table-delete"></ex-code>

<ex-code name="ex-table-width"></ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/zh-cn/components/table.md">

<h3>zi-table</h3>

| Attribute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description | Type | Accepted values | Default
| ------------------------- | ---------- | ---- |  -------------- | ------ |
| **data** | table's content | `Array<string | number>` | - | `[]` |
| **width** | table's width | `string | number` | - | - |
| **empty-text** | displayed text when table's content is empty | `string | boolean` | - | `false` |
| **hover** | table's hover effect  | `boolean` | `true` / `false` | `false` |
| **cell-click** | callback cell's dom by click  | `object` | - | - |
| **row-click** | callback row's content by click  | `object` | - | - |

<br/>
<h3>zi-table-column</h3>

| Attribute | Description | Type | Accepted values | Default
| ---------- | ---------- | ---- |  -------------- | ------ |
| **prop** | table-column's prop | `string` | - | - |
| **label** | table header's content | `string` | - | - |
| **width** | table column's width | `string | number` | - | - |
| **min-width** | table column's min width | `string | number` | - | - |

</ex-footer>
