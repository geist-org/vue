## Slider / 滑块

提供数字范围内的滑动选择。

<ex-code name="ex-slider-basic">

默认允许滑动按钮。

</ex-code>

<ex-code name="ex-slider-disabled"></ex-code>

<ex-code name="ex-slider-step"></ex-code>

<ex-code name="ex-slider-range">

如果滑块的范围是 1，你应该提供合适的步长。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/slider.md">

| 属性           | 描述             | 类型      | 推荐值    | 默认    |
| -------------- | ---------------- | --------- | --------- | ------- |
| **v-model**    | 绑定值           | `number`  | `0 - 100` | `0`     |
| **step**       | 步长             | `number`  | -         | `1`     |
| **show-stops** | 显示步长的标识点 | `boolean` | -         | `false` |
| **disabled**   | 禁用滑块         | `boolean` | -         | `false` |

</ex-footer>
