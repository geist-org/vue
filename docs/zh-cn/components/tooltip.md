## Tooltip / 提示框

在组件外即时显示提示信息。

<ex-code name="ex-tooltip-basic">

<code>Tooltip</code> 组件可以在不同的方向打开。

</ex-code>

<ex-code name="ex-tooltip-clickable">

以 <code>click</code> 模式触发组件。

</ex-code>

<ex-code name="ex-tooltip-delay">

在一段时间后隐藏，仅在 <code>hover</code> 模式下有效。

</ex-code>

<ex-code name="ex-tooltip-custom">

填充元素内容。

</ex-code>

<ex-code name="ex-tooltip-components">

你可以在任何 <code>zeit-ui</code> 组件上使用 <code>Tooltip</code>。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/tooltip.md">

| 属性          | 描述             | 类型      | 推荐值                                | 默认     |
| ------------- | ---------------- | --------- | ------------------------------------- | -------- |
| **content**   | 显示内容         | `string`  | -                                     | -        |
| **placement** | 弹出方向         | `string`  | `top/bottom/left/right (-start/-end)` | `bottom` |
| **clickable** | 点击模式         | `boolean` | -                                     | `false`  |
| **delay**     | 延迟关闭时间(ms) | `number`  | -                                     | -        |

</ex-footer>
