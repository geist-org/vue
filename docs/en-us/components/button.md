## Button

Used to trigger an operation.

<ex-code name="ex-button-basic">

The button contains a ripple effect.

</ex-code>

<ex-code name="ex-button-type">

You may need different forms of buttons in different scenarios.

</ex-code>

<ex-code name="ex-button-loading">

Any <code>Button</code> can add <code>loading</code> state.

</ex-code>

<ex-code name="ex-button-status">

</ex-code>

<ex-code name="ex-button-ghost">

Contrary background and border.

</ex-code>

<ex-code name="ex-button-icon">

In some special cases, the icon will be hidden.

</ex-code>

<ex-code name="ex-button-custom-icon">

set any icon which you want.

</ex-code>

<ex-code name="ex-button-size">

Buttons have different sizes, but you can also specify styles.

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/button.md">

| Attribute | Description | Type | Accepted values | Default
| ---------- | ---------- | ---- |  -------------- | ------ |
| **size** | button size | `string` | `small` / `mini` / `medium` / `big` / `huge` | `medium` |
| **type** | button type | `string` | `primary` / `success` / `danger` / `warning` / `abort` / `normal` | - |
| **loading** | loading for button content | `boolean` | - | `false` |
| **disabled** | set button disabled | `boolean` | - | `false` |
| **shadow** | button with shadow | `boolean` | - | `false` |
| **circular** | have border-radius | `boolean` | - | `false` |
| **auto** | button width auto | `boolean` | - | `false` |
| **ghost** | transparent background | `boolean` | - | `false` |
| **effect** | click animation | `boolean` | - | `true` |
| **icon** | set icon(left) | `component` | - | - |
| **iconRight** | set icon(right) | `component` | - | - |

</ex-footer>
