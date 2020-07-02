## Checkbox / 多选框

<ex-code name="ex-checkbox-basic"/>

单独使用时会直接返回 <code>true</code> 或是 <code>false</code>。

</ex-code>

<ex-code name="ex-checkbox-disabled"/>

禁用状态。

</ex-code>

<ex-code name="ex-checkbox-group"/>

使用一组时会返回 <code>Array</code> 类型。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/checkbox.md">

<h3> zi-checkbox </h3>

| 属性         | 描述       | 类型               | 推荐值 | 默认    |
| ------------ | ---------- | ------------------ | ------ | ------- |
| **label**    | 显示的标签 | `string`           | -      | -       |
| **value**    | 选中的值   | `string | boolean` | -      | false   |
| **disabled** | 是否禁用   | `boolean`          | -      | `false` |

<br/>
<h3> zi-checkbox-group </h3>

| 属性         | 描述           | 类型      | 推荐值 | 默认    |
| ------------ | -------------- | --------- | ------ | ------- |
| **value**    | 一组值         | `array`   | -      | []      |
| **disabled** | 是否禁用一个组 | `boolean` | -      | `false` |

</ex-footer>
