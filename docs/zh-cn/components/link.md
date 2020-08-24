## Link / 链接

网页之间的超链接。

<ex-code name="ex-link-basic"/>

<code>Link</code> 组件默认会为链接添加一个图标。

</ex-code>

<ex-code name="ex-link-more"/>

另一种风格的链接。

</ex-code>

<ex-code name="ex-link-to"/>

<code>Link</code> 组件也支持 <code>Vue 路由</code> 的跳转方式。

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/link.md">

| 属性       | 描述              | 类型              | 推荐值 | 默认     |
| ---------- | ----------------- | ----------------- | ------ | -------- |
| **href**   | 链接地址          | `string`          | -      | -        |
| **to**     | Vue 路由跳转对象  | `string | object` | -      | -        |
| **more**   | 显示更多的图标    | `boolean`         | -      | `false`  |
| **color**  | 链接显示颜色      | `boolean`         | -      | `false`  |
| **bold**   | 粗体显示          | `boolean`         | -      | `false`  |
| **pure**   | 隐藏图标          | `boolean`         | -      | `false`  |
| **target** | 跳转方式          | `string`          | -      | `_blank` |
| **rel**    | 链接的 `rel` 属性 | `string`          | -      | -        |

</ex-footer>
