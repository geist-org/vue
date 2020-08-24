## Popover

The primary header navigation menu.

<ex-code name="ex-popover-basic"/>

Only contains two buttons.

</ex-code>

<ex-code name="ex-popover-align"/>

Specify different alignment styles.

</ex-code>

<ex-code name="ex-popover-split"/>

Auxiliary attrs help you build complex menus.

</ex-code>

<ex-code name="ex-popover-command"/>

Of course, you can get click events for each button.

</ex-code>

<ex-code name="ex-popover-hoverable"/>

Triggered by <code>hover</code> event.

</ex-code>

<ex-footer edit-link="https://github.com/geist-org/vue/edit/master/docs/en-us/components/popover.md">
<h3> zi-popover </h3>

| Attribute          | Description                                | Type      | Accepted values             | Default  |
| ------------------ | ------------------------------------------ | --------- | --------------------------- | -------- |
| **align**          | alignment of drop-down menu                | `string`  | `left` / `right` / `center` | `center` |
| **hideOnClick**    | hide menu when clicked                     | `boolean` | -                           | `true`   |
| **command**[event] | item click callback                        | `event`   | -                           | -        |
| **hoverable**      | triggered by `hover` event                 | `boolean` | -                           | `false`  |
| **delay**          | hide after a delay (only `hoverable` mode) | `number`  | -                           | 300      |

<br/>
<h3> zi-popover-item </h3>

| Attribute    | Description                      | Type              | Accepted values | Default |
| ------------ | -------------------------------- | ----------------- | --------------- | ------- |
| **line**     | display a line                   | `boolean`         | -               | `false` |
| **title**    | display text in title mode       | `boolean`         | -               | `false` |
| **subtitle** | display text in subtitle mode    | `boolean`         | -               | `false` |
| **primary**  | display text in primary mode     | `boolean`         | -               | `false` |
| **disabled** | disable current row              | `boolean`         | -               | `false` |
| **href**     | display a link                   | `string`          | -               | -       |
| **to**       | display a vue router link        | `string`          | -               | -       |
| **command**  | callback text triggered by click | `string | object` | -               | -       |

</ex-footer>
