# Popover

## Examples

<ex-code name="ex-popover-basic"/></ex-code>

<ex-code name="ex-popover-align"/></ex-code>

<ex-code name="ex-popover-split"/></ex-code>

<ex-code name="ex-popover-command"/></ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/zh-cn/components/popover.md">
<h3> zi-popover </h3>

| Attribute | Description | Type | Accepted values | Default
| ---------- | ---------- | ---- |  -------------- | ------ |
| **align** | alignment of drop-down menu | `string` | `left` / `right` / `center` | `center` |
| **hideOnClick** | hide menu when clicked | `boolean` | `true` / `false` | `true` |
| **command**[event] | item click callback | `event` | - | - |

<br/>
<h3> zi-popover-item </h3>

| Attribute | Description | Type | Accepted values | Default
| ---------- | ---------- | ---- |  -------------- | ------ |
| **line** | display a line | `boolean` | `true` / `false` | `false` |
| **title** | display text in title mode | `boolean` | `true` / `false` | `false` |
| **subtitle** | display text in subtitle mode | `boolean` | `true` / `false` | `false` |
| **primary** | display text in primary mode | `boolean` | `true` / `false` | `false` |
| **disabled** | disable current row | `boolean` | `true` / `false` | `false` |
| **href** | display a link | `string` | - | - |
| **to** | display a vue router link | `string` | - | - |
| **command** | callback text triggered by click | `string` / `object` | - | - |

</ex-footer>
