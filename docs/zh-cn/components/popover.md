## Popover / 下拉菜单

常用于导航的下拉菜单。

<ex-code name="ex-popover-basic"/>

只包含按钮。

</ex-code>

<ex-code name="ex-popover-align"/>

指定不同的对齐方式。

</ex-code>

<ex-code name="ex-popover-split"/>

构筑复杂的菜单。

</ex-code>

<ex-code name="ex-popover-command"/>

你可以获得所有按钮的点击事件。

</ex-code>

<ex-code name="ex-popover-hoverable"/>

以 <code>hover</code> 事件模式触发。

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/popover.md">
<h3> zi-popover </h3>

| 属性               | 描述                                 | 类型      | 推荐值                      | 默认     |
| ------------------ | ------------------------------------ | --------- | --------------------------- | -------- |
| **align**          | 下拉菜单的对齐方式                   | `string`  | `left` / `right` / `center` | `center` |
| **hideOnClick**    | 点击背景隐藏菜单                     | `boolean` | -                           | `true`   |
| **command**(event) | 点击菜单项的回调事件                 | `event`   | -                           | -        |
| **hoverable**      | `hover` 触发模式                     | `boolean` | -                           | `false`  |
| **delay**          | 隐藏延时 (仅在 `hoverable` 模式生效) | `number`  | -                           | 300      |

<br/>
<h3> zi-popover-item </h3>

| 属性         | 描述                   | 类型              | 推荐值 | 默认    |
| ------------ | ---------------------- | ----------------- | ------ | ------- |
| **line**     | 显示一条分割线         | `boolean`         | -      | `false` |
| **title**    | 以标题模式显示文本     | `boolean`         | -      | `false` |
| **subtitle** | 以副标题模式显示文本   | `boolean`         | -      | `false` |
| **primary**  | 以强调的主色彩显示文本 | `boolean`         | -      | `false` |
| **disabled** | 禁用当前行             | `boolean`         | -      | `false` |
| **href**     | 显示一个链接，链接地址 | `string`          | -      | -       |
| **to**       | Vue 路由地址           | `string`          | -      | -       |
| **command**  | 点击的回调事件         | `string | object` | -      | -       |

</ex-footer>
