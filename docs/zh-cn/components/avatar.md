## Avatar / 头像

头像可以标识一个用户或者团队，堆叠的头像可以代表一个群体。

<ex-code name="ex-avatar-default"/>

组件 <code>Avatar</code> 包含圆形和方块。

</ex-code>

<ex-code name="ex-avatar-size"/>

你可以指定 <code>Avatar</code> 组件的大小。

</ex-code>

<ex-code name="ex-avatar-text"/>

有时候也可以用于显示文字。

</ex-code>

<ex-code name="ex-avatar-stacked"/>

多个头像可以进行堆叠。

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/avatar.md">

| 属性        | 描述                    | 类型      | 推荐值                              | 默认     |
| ----------- | ----------------------- | --------- | ----------------------------------- | -------- |
| **stacked** | 堆叠显示头像            | `boolean` | `true` / `false`                    | `false`  |
| **src**     | 图片的 src 属性         | `string`  | -                                   | -        |
| **text**    | 当缺少 src 时显示的文字 | `string`  | -                                   | -        |
| **size**    | 头像大小                | `string`  | `small` / `medium` / `big` / `huge` | `medium` |
| **shape**   | 组件形状                | `string`  | `circle` / `square`                 | `circle` |

</ex-footer>
