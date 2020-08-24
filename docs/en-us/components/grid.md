## Grid

Fluid style layout container.

<ex-code name="ex-grid-basic">

Set the spacing between components.

</ex-code>

<ex-code name="ex-grid-fluid">

Containers for wrapping and scaling.

</ex-code>

<ex-code name="ex-grid-responsive">

Use different layouts for different screen widths.

</ex-code>

<ex-code name="ex-grid-hidden">

Hide elements when unit size is 0.

</ex-code>

<ex-code name="ex-grid-autoWidth">

Auto fill remaining width.

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/grid.md">

| Attribute        | Description                                     | Type               | Accepted values       | Default      |
| ---------------- | ----------------------------------------------- | ------------------ | --------------------- | ------------ |
| **container**    | set flex container                              | `boolean`          | -                     | `fasle`      |
| **spacing**      | spacing of item                                 | `number`           | -                     | `0`          |
| **justify**      | css "justify-content" property                  | `string`           | `justify-content`     | `flex-start` |
| **alignItems**   | css "align-items" property                      | `string`           | `align-item`          | `stretch`    |
| **alignContent** | css "align-content" property                    | `string`           | `align-content`       | `stretch`    |
| **direction**    | css "flex-direction" property                   | `string`           | `flex-direction`      | `row`        |
| **wrap**         | css "flex-wrap" property                        | `string`           | `flex-wrap`           | `wrap`       |
| **xs**           | grid width,for xs breakpoints and wider screens | `number | boolean` | `0-24`,`true / false` | `false`      |
| **sm**           | grid width,for sm breakpoints and wider screens | `number | boolean` | `0-24`,`true / false` | `false`      |
| **md**           | grid width,for md breakpoints and wider screens | `number | boolean` | `0-24`,`true / false` | `false`      |
| **lg**           | grid width,for lg breakpoints and wider screens | `number | boolean` | `0-24`,`true / false` | `false`      |
| **xl**           | grid width,for xl breakpoints and wider screens | `number | boolean` | `0-24`,`true / false` | `false`      |

</ex-footer>
