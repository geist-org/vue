# Toast

## Examples

<ex-code name="ex-toast-basic"/></ex-code>

<ex-code name="ex-toast-action"/></ex-code>

<ex-code name="ex-toast-status"/></ex-code>

<ex-code name="ex-toast-duration"/></ex-code>

<ex-code name="ex-toast-handler"/></ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/toast.md">

prototype: `$Toast`

```ts
type ToastOption = {
  text: string,
  action: string,
  type: 'success' | 'warning' | 'warning',
  duration: number,
  handler: Function,
}

type ToastInstance = {
  vm: Result<$mount>,
  close: Function,    // destroy handler
} & VueComponent
```

<br/>

| Methods | Description | Params 
| ---------- | ---------- | ----
| **show** | show basic toast | `(text: string | ToastOption): ToastInstance`
| **success** | show success toast | `(text: string | ToastOption): ToastInstance`
| **warning** | show warning toast | `(text: string | ToastOption): ToastInstance`
| **danger** | show danger toast | `(text: string | ToastOption): ToastInstance`
| **closeAll** | remove all active toasts | `(): void`

</ex-footer>
