## Tabs / 选项卡

显示选项卡的内容。

<ex-code name="ex-tabs-basic">

切换以显示不同的模板。

</ex-code>

<ex-code name="ex-tabs-disabled">

禁用所有的选项。

</ex-code>

<ex-code name="ex-tabs-icon">

为选项卡的子项设置一个图标

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/tabs.md">

<h3>zi-tabs</h3>

| 属性                      | 描述         | 类型      | 推荐值 | 默认    |
| ------------------------- | ------------ | --------- | ------ | ------- |
| **label-selected**(event) | 开关点击事件 | `event`   | -      | -       |
| **disabled**              | 禁用选项卡   | `Boolean` | -      | `false` |

<br/>

<h3>zi-tabs-item</h3>

| 属性                | 描述         | 类型      | 推荐值 | 默认    |
| ------------------- | ------------ | --------- | ------ | ------- |
| **label**(必须属性) | 文本         | `string`  | -      | -       |
| **value**(必须属性) | 值，唯一性   | `string`  | -      | -       |
| **active**          | 当前激活状态 | `boolean` | -      | `false` |
| **icon**            | 设置图标     | `obeject` | -      | -       |

</ex-footer>
