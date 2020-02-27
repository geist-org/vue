## Select / 选择器

显示下拉列表选框。

<ex-code name="ex-select-basic"></ex-code>

<ex-code name="ex-select-size"></ex-code>

<ex-code name="ex-select-simple">

无图标的样式。

</ex-code>

<ex-code name="ex-select-disabled">

你可以在 <code>Item</code> 中禁用单个，或是在 <code>Option</code> 禁用全部。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/select.md">
<h3>zi-select</h3>

| 属性 | 描述 | 类型 | 推荐值 | 默认
| ---------- | ---------- | ---- |  -------------- | ------ |
| **v-model** | 绑定知 | `string | boolean | number` | - | - |
| **size** | 框体大小 | `string` | `mini` / `small` / `medium` | - |
| **autocomplete** | 原生属性 | `boolean` | - | `false` |
| **autofocus** | 原生属性 | `boolean` | - | `false` |
| **form** | 原生属性 | `string` | - | - |
| **name** | 原生属性 | `string` | - | - |
| **disabled** | 禁用整个选项框体 | `boolean` | - | `false` |
| **simple** | 是否禁用图标 | `boolean` | - | `false` |

<br/>
<h3>zi-option</h3>

| 属性 | 描述 | 类型 | 推荐值 | 默认
| ---------- | ---------- | ---- |  -------------- | ------ |
| **v-model** | 绑定知 | `string | number` | - | - |
| **label** | 文本 | `string` | - | - |
| **disabled** | 是否禁用此选项 | `boolean` | - | `false` |

</ex-footer>
