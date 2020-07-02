## Progress

Progress in expressing events in time.

<ex-code name="ex-progress-basic">

Display a bar and a number box by default.

</ex-code>

<ex-code name="ex-progress-max"></ex-code>

<ex-code name="ex-progress-colors">

You can set different stages to display different colors.

</ex-code>

<ex-code name="ex-progress-type"></ex-code>

<ex-code name="ex-progress-fixed">

This fixed progress bar is displayed at the top of the page.

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/progress.md">

| Attribute  | Description           | Type                | Accepted values                                            | Default   |
| ---------- | --------------------- | ------------------- | ---------------------------------------------------------- | --------- |
| **value**  | current percentage    | `number`            | -                                                          | `0`       |
| **fix**    | display in fixed mode | `string`            | `top` / `bottom`                                           | -         |
| **colors** | background color      | `array`             | hex color                                                  | -         |
| **max**    | progress max number   | `number` / `string` | -                                                          | `100`     |
| **type**   | progress type         | `string`            | `default` / `success` / `danger` / `warning` / `secondary` | `default` |

</ex-footer>
