## Table / 表格

以规则的表格显示数据集。

<ex-code name="ex-table-basic">

显示规则化的行和列。

</ex-code>

<ex-code name="ex-table-delete">

显示删除按钮。一个行发生变化后表格会自动同步。

</ex-code>

<ex-code name="ex-table-width">

你可以指定某几个列的宽度，剩下的列会自动适应调整宽度。

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/table.md">

<h3>zi-table</h3>

| 属性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 描述               | 类型                     | 推荐值 | 默认    |
| ---------------------------------------------------------------------------------------------- | ------------------ | ------------------------ | ------ | ------- |
| **data**                                                                                       | 表格数据           | `Array<string | number>` | -      | `[]`    |
| **width**                                                                                      | 表格宽度           | `string | number`        | -      | -       |
| **empty-text**                                                                                 | 空单元格显示的文本 | `string | boolean`       | -      | `false` |
| **hover**                                                                                      | hover 效果         | `boolean`                | -      | `false` |
| **cell-click**(event)                                                                          | 单元格点击事件     | `event`                  | -      | -       |
| **row-click**(event)                                                                           | 行的点击事件       | `event`                  | -      | -       |

<br/>
<h3>zi-table-column</h3>

| 属性          | 描述           | 类型              | 推荐值 | 默认 |
| ------------- | -------------- | ----------------- | ------ | ---- |
| **prop**      | 每列的 prop 值 | `string`          | -      | -    |
| **label**     | 标题           | `string`          | -      | -    |
| **width**     | 列的宽度       | `string | number` | -      | -    |
| **min-width** | 列的最小宽度   | `string | number` | -      | -    |

</ex-footer>
