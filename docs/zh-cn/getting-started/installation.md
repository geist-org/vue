## 安装

### 从包管理器安装

<br/>

<zi-note>
请确定你的 <zi-link pure href="https://nodejs.org/en/download/">NodeJS</zi-link> 处于最新版本，
同时你还需要准备包管理器: <zi-link pure href="https://www.npmjs.com/">NPM</zi-link> 或是 <zi-link pure href="https://yarnpkg.com/">Yarn</zi-link>.
</zi-note>

<br/>

1. 运行脚本下载:

<zi-code bash>npm i @geist-ui/vue</zi-code>

2. 引入 `@geist-ui/vue` 到你的项目中:

```js
import Vue from 'vue'
import GeistUI from '@geist-ui/vue'
import '@geist-ui/vue/dist/geist-ui.css' // require style

Vue.use(GeistUI)
```

<br>

### 使用 CDN

从 `unpkg.com` 获取项目最新的包:

```
<link rel="stylesheet" href="//unpkg.com/@geist-ui/vue@latest/dist/geist-ui.css">
<script src="//unpkg.com/@geist-ui/vue@latest/dist/geist-ui.umd.js"></script>
```

如果你选择 CDN，也可以参考 [UMD 示例项目](https://github.com/geist-org/vue/blob/master/examples/umd/index.html)。

<br>
<br>

### 引入单个组件

`@geist-ui/vue` 支持仅引入你需要的单个组件。示例:

```js
import Vue from 'vue'
import Button from '@geist-ui/vue/lib/button.common'
import '@geist-ui/themes/index.css'
import '@geist-ui/typography/index.css'
import '@geist-ui/vue/lib/button.css'

Button.install(Vue)
```
