## Dialog / 对话框

可以包含多个元素的对话框。

<ex-code name="ex-dialog-basic"/>

<code>Dialog</code> 组件默认包含 2 个按钮。

</ex-code>

<ex-code name="ex-dialog-custom"/>

你可以定制显示的内容。

</ex-code>

<ex-code name="ex-dialog-more"/>

添加更多的自定义组件。

</ex-code>

<ex-footer edit-link="https://github.com/zeit-ui/vue/edit/master/docs/en-us/components/avatar.md">

| 属性 | 描述 | 类型 | 推荐值 | 默认
| ---------- | ---------- | ---- |  -------------- | ------ |
| **width** | 对话框宽度 | `string` | - | - |
| **title** | 标题 | `string` | - | - |
| **value** | 显示与隐藏 | `boolean` | - | `false` |
| **cancel** | 取消按钮的文字 | `string` | - | `cancel` |
| **done** | 确定按钮的文字  | `string` | - | `done` |
| **beforeDone** | 确定按钮触发前的回调 | `function` | - | `done => done()` |
| **closeByModal** | 点击背景是否可以关闭 | `boolean` | - | `true` |

</ex-footer>
