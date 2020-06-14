## 栅格

流体风格的布局容器

<ex-code name="ex-grid-basic"></ex-code>

<ex-code name="ex-grid-fluid">

自动换行。

</ex-code>

<ex-code name="ex-grid-responsive">

在不同的屏幕宽度下展示不同的布局。

</ex-code>

<ex-code name="ex-grid-auto-width">

自动分配剩余宽度。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/grid.md">

| 属性 | 描述 | 类型 | 推荐值 | 默认
| ---------- | ---------- | ---- |  -------------- | ------ |
| **container** | 容器属性 | `boolean` | - | `false` |
| **spacing** | 子组件间距 | `number` | - | `0` |
| **justify** | css属性"justify-content" | `string` | `justify-content` | `flex-start` |
| **alignItems** | css属性"align-items" | `string` | `align-items` | `stretch` |
| **alignContent** | css属性"align-content" | `string` | `align-content` | `stretch` |
| **direction** | css属性"flex-direction" | `string` | `flex-direction` | `row` |
| **wrap** | css属性"flex-wrap" | `string` | `flex-wrap` | `wrap` |
| **xs** | 栅格宽度，影响 xs 断点与更宽的屏幕 | `number | boolean` | `0-24`,`true / false` | `false` |
| **sm** | 栅格宽度，影响 sm 断点与更宽的屏幕 | `number | boolean` | `0-24`,`true / false` | `false` |
| **md** | 栅格宽度，影响 md 断点与更宽的屏幕 | `number | boolean` | `0-24`,`true / false` | `false` |
| **lg** | 栅格宽度，影响 lg 断点与更宽的屏幕 | `number | boolean` | `0-24`,`true / false` | `false` |
| **xl** | 栅格宽度，影响 xl 断点与更宽的屏幕 | `number | boolean` | `0-24`,`true / false` | `false` |

</ex-footer>
