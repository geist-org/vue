## Tabs

Display tab content.

<ex-code name="ex-tabs-basic">

Toggle display of different templates.

</ex-code>

<ex-code name="ex-tabs-disabled">

Disable all items.

</ex-code>

<ex-code name="ex-tabs-icon">

Set label with icon.

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/tabs.md">

<h3>zi-tabs</h3>

| Attribute                 | Description          | Type      | Accepted values | Default |
| ------------------------- | -------------------- | --------- | --------------- | ------- |
| **label-selected**(event) | label selected event | `event`   | -               | -       |
| **disabled**              | set tabs disabled    | `Boolean` | -               | `false` |

<br/>

<h3>zi-tabs-item</h3>

| Attribute           | Description      | Type      | Accepted values | Default |
| ------------------- | ---------------- | --------- | --------------- | ------- |
| **label**(required) | label text       | `string`  | -               | -       |
| **value**(required) | tab's value      | `string`  | -               | -       |
| **active**          | currently active | `boolean` | -               | `false` |
| **icon**            | set icon         | `object` | -               | -       |

</ex-footer>
