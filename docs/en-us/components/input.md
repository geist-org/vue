## Input

Retrieve text input from a user.

<ex-code name="ex-input-basic"></ex-code>

<ex-code name="ex-input-size">

Inputs have different sizes, but you can also specify styles.

</ex-code>

<ex-code name="ex-input-label"></ex-code>

<ex-code name="ex-input-clearable">

Clear all text at a button.

</ex-code>

<ex-code name="ex-input-disabled"></ex-code>

<ex-code name="ex-input-type"></ex-code>

<ex-code name="ex-input-icon">

You can get more icons from <zi-code>geist-ui/vue-icons</zi-code> library,
please refer to <zi-link color href="https://github.com/geist-org/vue-icons">vue-icons</zi-link> .

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/input.md">

| Attribute             | Description                                                                                                   | Type              | Accepted values                              | Default   |
| --------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------------------- | --------- |
| **value**             | input value                                                                                                   | `string`          | -                                            | -         |
| **placeholder**       | input placeholder                                                                                             | `string`          | -                                            | -         |
| **clearable**         | clear input value                                                                                             | `boolean`         | `true` / `false`                             | `false`   |
| **size**              | input size                                                                                                    | `string`          | `mini` / `small` / `medium` / `big`          | -         |
| **type**              | input type                                                                                                    | `string`          | `primary` / `success` / `danger` / `warning` | `primary` |
| **form**              | input value                                                                                                   | `string`          | -                                            | -         |
| **\_type**            | original property                                                                                             | `string`          | -                                            | `text`    |
| **autocomplete**      | original property, read [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) to learn more | `string`          | `on` / `off`                                 | `off`     |
| **spellcheck**        | original property                                                                                             | `boolean`         | `true` / `false`                             | -         |
| **autofocus**         | original property                                                                                             | `boolean`         | `true` / `false`                             | `false`   |
| **readonly**          | input readonly                                                                                                | `boolean`         | `true` / `false`                             | `false`   |
| **disabled**          | input disabled                                                                                                | `boolean`         | `true` / `false`                             | `false`   |
| **prefixLabel**       | prefix label                                                                                                  | `string | number` | -                                            | -         |
| **suffixLabel**       | suffix label                                                                                                  | `string | number` | -                                            | -         |
| **prefixIcon** (slot) | input prefix icon (see the example code above for the usage)                                                  | `slot`            | -                                            | -         |
| **suffixIcon** (slot) | suffix icon (see the example code above for the usage)                                                        | `slot`            | -                                            | -         |

</ex-footer>
