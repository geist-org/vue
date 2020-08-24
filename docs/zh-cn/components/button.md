## Button / 按钮

用于触发一个操作。

<ex-code name="ex-button-basic">

默认按钮会包含一个动画效果。

</ex-code>

<ex-code name="ex-button-type">

在不同的场景中使用不同类型的按钮。

</ex-code>

<ex-code name="ex-button-loading">

任何 <code>Button</code> 组件都可以添加 <code>loading</code> 状态，表示加载中。

</ex-code>

<ex-code name="ex-button-status">

</ex-code>

<ex-code name="ex-button-ghost">

背景与边框相反的按钮。

</ex-code>

<ex-code name="ex-button-icon">

在一些特殊状态下图标会隐藏。

</ex-code>

<ex-code name="ex-button-custom-icon">

设置任意一个你想要的图标

</ex-code>

<ex-code name="ex-button-size">

不同大小的按钮。你也可以手动设置样式。

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/button.md">

| 属性          | 描述           | 类型        | 推荐值                                                            | 默认      |
| ------------- | -------------- | ----------- | ----------------------------------------------------------------- | --------- |
| **size**      | 按钮大小       | `string`    | `small` / `mini` / `medium` / `big` / `huge`                      | `medium`  |
| **type**      | 按钮类型       | `string`    | `primary` / `success` / `danger` / `warning` / `abort` / `normal` | `primary` |
| **loading**   | 是否在加载中   | `boolean`   | -                                                                 | `false`   |
| **disabled**  | 按钮是否禁用   | `boolean`   | -                                                                 | `false`   |
| **shadow**    | 是否包含阴影   | `boolean`   | -                                                                 | `false`   |
| **circular**  | 圆角更大的按钮 | `boolean`   | -                                                                 | `false`   |
| **auto**      | 自适应宽度     | `boolean`   | -                                                                 | `false`   |
| **ghost**     | 背景与边框反色 | `boolean`   | -                                                                 | `false`   |
| **effect**    | 点击动画       | `boolean`   | -                                                                 | `true`    |
| **icon**      | 设置图标(左边) | `component` | -                                                                 | -         |
| **iconRight** | 设置图标(右边) | `component` | -                                                                 | -         |

</ex-footer>
