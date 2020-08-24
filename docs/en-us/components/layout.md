## Layout

Smart and simple layout components.

<ex-code name="ex-layout-basic">

<code>zi-row</code> can create basic row container.

</ex-code>

<ex-code name="ex-layout-column">

<code>zi-col</code> can create columns of different widths.

</ex-code>

<ex-code name="ex-layout-spacing">

<code>zi-row</code> provides gutter attr to specify spacings between columns.

</ex-code>

<ex-code name="ex-layout-compose">

Create compose layout by combining the basic 1/24 columns.

</ex-code>

<ex-code name="ex-layout-alignment">

Use <code>justify</code> and <code>align</code> make to alignment of columns.

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/layout.md">
<h3>zi-row</h3>

| Attribute   | Description          | Type     | Accepted values                                       | Default |
| ----------- | -------------------- | -------- | ----------------------------------------------------- | ------- |
| **gutter**  | grid spacing         | `number` | -                                                     | 0       |
| **justify** | horizontal alignment | `string` | `start / end / center / space-around / space-between` | `start` |
| **align**   | vertical alignmen    | `string` | `top / middle / bottom`                               | `top`   |

<br/>
<h3>zi-col</h3>

| Attribute | Description                     | Type     | Accepted values | Default |
| --------- | ------------------------------- | -------- | --------------- | ------- |
| **span**  | number of column the grid spans | `number` | 1 - 24          | 24      |

</ex-footer>
