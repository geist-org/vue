## Dialog

Dialog boxes with multiple elements.

<ex-code name="ex-dialog-basic"/>

The <code>Dialog</code> contains two buttons by default

</ex-code>

<ex-code name="ex-dialog-custom"/></ex-code>

<ex-code name="ex-dialog-more"/>

You can add more components to content.

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/avatar.md">

| Attribute        | Description                         | Type       | Accepted values  | Default          |
| ---------------- | ----------------------------------- | ---------- | ---------------- | ---------------- |
| **width**        | dialog's width                      | `string`   | -                | -                |
| **title**        | dialog's title                      | `string`   | -                | -                |
| **value**        | Switch the display hiding of dialog | `boolean`  | `true` / `false` | `false`          |
| **cancel**       | text of cancel button               | `string`   | -                | `cancel`         |
| **done**         | text of done button                 | `string`   | -                | `done`           |
| **beforeDone**   | callback before close dialog        | `function` | -                | `done => done()` |
| **closeByModal** | click modal will close the dialog   | `boolean`  | `true` / `false` | `true`           |

</ex-footer>
