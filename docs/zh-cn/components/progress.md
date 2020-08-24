## Progress / 进度条

展示事件的进展。

<ex-code name="ex-progress-basic">

默认展示一个进度条。

</ex-code>

<ex-code name="ex-progress-max">

设置进度条的最大值

</ex-code>

<ex-code name="ex-progress-colors">

你可以设置不同进度时的色彩。

</ex-code>

<ex-code name="ex-progress-type">

可以选择多种类型

</ex-code>

<ex-code name="ex-progress-fixed">

固定进度条在顶部。

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/progress.md">

| 属性       | 描述       | 类型                | 推荐值                                                     | 默认      |
| ---------- | ---------- | ------------------- | ---------------------------------------------------------- | --------- |
| **value**  | 当前进度值 | `number`            | -                                                          | `0`       |
| **fix**    | 固定方式   | `string`            | `top` / `bottom`                                           | -         |
| **colors** | 背景色     | `array`             | hex color                                                  | -         |
| **max**    | 最大值     | `number` / `string` | -                                                          | `100`     |
| **type**   | 多种类型   | `string`            | `default` / `success` / `danger` / `warning` / `secondary` | `default` |

</ex-footer>
