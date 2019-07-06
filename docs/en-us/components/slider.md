## Slider

Display a numeric value within a range.

<ex-code name="ex-slider-basic">

Accept clicks or drag actions.

</ex-code>

<ex-code name="ex-slider-disabled"></ex-code>

<ex-code name="ex-slider-step"></ex-code>

<ex-code name="ex-slider-range">

If slider's range is equal to 1, you should set the step to suitable Decimal

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/slider.md">

| Attribute | Description | Type | Accepted values | Default
| ---------- | ---------- | ---- |  -------------- | ------ |
| **v-model** | binding value[v-model] | `number` | `0 - 100` | `0`|
| **step** | length of per step | `number` | - | `1` |
| **show-stops** | show dot | `boolean` | - | `false` |
| **disabled** | make slider disabled | `boolean` | - | `false` |

</ex-footer>
