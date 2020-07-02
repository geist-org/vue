## Input / 输入框

处理用户的输入数据。

<ex-code name="ex-input-basic"></ex-code>

<ex-code name="ex-input-size">

输入框内置了不同尺寸，但你也可以自定样式。

</ex-code>

<ex-code name="ex-input-label"></ex-code>

<ex-code name="ex-input-clearable">

包含一个清除按钮。

</ex-code>

<ex-code name="ex-input-disabled"></ex-code>

<ex-code name="ex-input-type"></ex-code>

<ex-code name="ex-input-icon">

你可以在 <zi-code>zeit-ui/vue-icons</zi-code> 库获取更多的图标,
请参阅 <zi-link color href="https://github.com/zeit-ui/vue-icons">vue-icons 文档</zi-link>。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/input.md">

| 属性                  | 描述                                                                                              | 类型              | 推荐值                                       | 默认      |
| --------------------- | ------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------------------- | --------- |
| **value**(v-model)    | 可绑定的输入值                                                                                    | `string`          | -                                            | -         |
| **placeholder**       | 占位文字                                                                                          | `string`          | -                                            | -         |
| **clearable**         | 是否显示清除按钮                                                                                  | `boolean`         | -                                            | `false`   |
| **size**              | 输入框大小                                                                                        | `string`          | `mini` / `small` / `medium` / `big`          | -         |
| **type**              | 输入框类型                                                                                        | `string`          | `primary` / `success` / `danger` / `warning` | `primary` |
| **form**              | 表单值                                                                                            | `string`          | -                                            | -         |
| **\_type**            | 原生的 HTML 属性                                                                                  | `string`          | -                                            | `text`    |
| **autocomplete**      | 原生属性，请参阅 [文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) 了解更多 | `string`          | `on` / `off`                                 | `off`     |
| **spellcheck**        | 原生属性                                                                                          | `boolean`         | -                                            | -         |
| **autofocus**         | 原生属性                                                                                          | `boolean`         | -                                            | `false`   |
| **readonly**          | 输入框是否为只读                                                                                  | `boolean`         | -                                            | `false`   |
| **disabled**          | 是否禁用                                                                                          | `boolean`         | -                                            | `false`   |
| **prefixLabel**       | 前缀文本                                                                                          | `string | number` | -                                            | -         |
| **suffixLabel**       | 后缀文本                                                                                          | `string | number` | -                                            | -         |
| **prefixIcon** (slot) | 前缀图标 (详细请参阅上文示例)                                                                     | `slot`            | -                                            | -         |
| **suffixIcon** (slot) | 后缀图标 (详细请参阅上文示例)                                                                     | `slot`            | -                                            | -         |

</ex-footer>
