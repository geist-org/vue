## Layout / 布局

以简易的方式构建页面布局。

<ex-code name="ex-layout-basic">

<code>zi-row</code> 组件可以创建一个行容器。

</ex-code>

<ex-code name="ex-layout-column">

<code>zi-col</code> 组件可以创建不同宽度的列容器。

</ex-code>

<ex-code name="ex-layout-spacing">

<code>zi-row</code> 支持 <code>gutter</code> 属性设置列之间的间隔。

</ex-code>

<ex-code name="ex-layout-compose">

组合基本的 1/24 列完成布局。

</ex-code>

<ex-code name="ex-layout-alignment">

使用 <code>justify</code> 与 <code>align</code> 属性以不同方式对齐列。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/layout.md">
<h3>zi-row</h3>

| 属性        | 描述         | 类型     | 推荐值                                                | 默认    |
| ----------- | ------------ | -------- | ----------------------------------------------------- | ------- |
| **gutter**  | 表格间距     | `number` | -                                                     | 0       |
| **justify** | 水平对齐方式 | `string` | `start / end / center / space-around / space-between` | `start` |
| **align**   | 垂直对齐方式 | `string` | `top / middle / bottom`                               | `top`   |

<br/>
<h3>zi-col</h3>

| 属性     | 描述             | 类型     | 推荐值 | 默认 |
| -------- | ---------------- | -------- | ------ | ---- |
| **span** | 列占有的网格大小 | `number` | 1 - 24 | 24   |

</ex-footer>
