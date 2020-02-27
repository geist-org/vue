## 主题

`@zeit-ui/vue` 现在也支持 **黑暗模式**。你可以在任何时间使用非常简单的 API 完成切换，不需要任何第三方样式或库。

<br>

### 切换主题

你可以在任意处使用此 `API`，所有的组件都会自动更新以适应主题。

```js
import ZeitUI from '@zeit-ui/vue'

ZeitUI.theme.enableLight()
ZeitUI.theme.enableDark()
```

<br>

### 定制主题

`@zeit-ui/vue` 使用 `@zeit-ui/themes` 作为主题和色彩的提供者，你可以在 [@zeit-ui/themes](https://github.com/zeit-ui/themes) 项目处了解更多的设定细节。

<zi-note label="注意">
<code>@zeit-ui/vue</code> 默认是包含 <code>@zeit-ui/themes</code> 的。
</zi-note>

<br>

理所应当，你也可以在自己的项目中覆盖这些主题变量：

<zi-spacer :y="1"></zi-spacer>

<zi-description title="第一步">
  在 <zi-link color href="https://github.com/zeit-ui/themes/blob/master/src/default/index.styl">这里</zi-link> 阅读所有的 CSS 变量.
</zi-description>
<br>
<br>
<zi-description title="第二部">
  设置全局 CSS 变量覆盖默认值：
  <zi-code block>html {
  --accents-1: #fff;
}</zi-code>
</div>

</zi-description>

<br>

### 定制组件样式

`Vue` 原生支持在组件上添加 `css class`, 你不需要任何 hack 就可以轻易的修改组件样式：

```vue
<template>
  <zi-card class="mycard">
    Hello world.
  </zi-card>
</template>

<style scoped>
.mycard
  font-size: 20px;
</style>
```

<zi-spacer :y="3"></zi-spacer>
