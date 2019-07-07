## Tooltip
Displays additional information on hover.

<ex-code name="ex-tooltip-basic">

<code>Tooltip</code> can be displayed in different directions.

</ex-code>

<ex-code name="ex-tooltip-clickable">

Trigger tooltip with <code>click</code>.

</ex-code>

<ex-code name="ex-tooltip-delay">

Hide after a delay, effective only in <code>hover</code> mode.

</ex-code>

<ex-code name="ex-tooltip-custom">

Elements can be filled in the content.

</ex-code>

<ex-code name="ex-tooltip-components">

You can use <code>Tooltip</code> on any <code>zeit-ui</code> component or native element.

</ex-code>


<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/tooltip.md">

| Attribute | Description | Type | Accepted values | Default
| ---------- | ---------- | ---- |  -------------- | ------ |
| **content** | display content | `string` | - | - |
| **placement** | position of tooltip | `string` | `top/bottom/left/right (-start/-end)` | `bottom` |
| **clickable** | trigger by click event | `boolean` | - | `false` |
| **delay** | hide after a delay (ms) | `number` | - | - |
</ex-footer>
