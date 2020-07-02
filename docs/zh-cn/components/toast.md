## Toast / 通知

显示重要的全局通知信息。

<ex-code name="ex-toast-basic"/></ex-code>

<ex-code name="ex-toast-action"/>

包含一个按钮与事件的通知。

</ex-code>

<ex-code name="ex-toast-status"/>

不同的状态。

</ex-code>

<ex-code name="ex-toast-duration"/>

指定时间后自动关闭。

</ex-code>

<ex-code name="ex-toast-handler"/></ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/toast.md">

下文的参数类型: `$Toast`

```ts
type ToastOption = {
  text: string
  action: string
  type: 'success' | 'warning' | 'warning'
  duration: number
  handler: Function
}

type ToastInstance = {
  vm: Result<$mount>
  close: Function // destroy handler
} & VueComponent
```

<br/>

| 方法         | 描述           | 参数                                          |
| ------------ | -------------- | --------------------------------------------- |
| **show**     | 显示基础的通知 | `(text: string | ToastOption): ToastInstance` |
| **success**  | 带有成功状态   | `(text: string | ToastOption): ToastInstance` |
| **warning**  | 带有警告状态   | `(text: string | ToastOption): ToastInstance` |
| **danger**   | 带有危险状态   | `(text: string | ToastOption): ToastInstance` |
| **closeAll** | 移除所有的通知 | `(): void`                                    |

</ex-footer>
