## 图标

`@zeit-ui/vue` 使用 `@zeit-ui/icons` 作为图标提供商，你可以通过安装 [@zeit-ui/icons](https://github.com/zeit-ui/vue-icons) 项目使用图标。
所有的图标都会自动跟随主题变化。

<zi-note type="warning" label="提示">
如果你需要图标，需要自行安装 <zi-code>@zeit-ui/icons</zi-code> 库。
</zi-note>

<zi-spacer :y="2"></zi-spacer>

### 安装图标库

1. 运行命令: <zi-code>yarn add @zeit-ui/vue-icons</zi-code>

2. 引入至项目:

```vue
import { install } from '@zeit-ui/vue-icons' import Vue from 'vue' install(Vue)
```

3. 随后尝试直接使用组件：

```html
<template>
  <apple-icon />
</template>
```

<zi-spacer :y="2"></zi-spacer>

### 功能特色

<br>

<zi-dot type="success">
所有的图标都是高质量的，且都是一个 Vue 组件。
</zi-dot>

<br>
<br>

<zi-dot type="success">
支持单个按需引入图标。
</zi-dot>

<br>
<br>

<zi-dot type="success">
所有的图标都能自动随主题切换。
</zi-dot>

<zi-spacer :y="2"></zi-spacer>

### 展示

<ex-exhibits></ex-exhibits>

<zi-spacer :y="3"></zi-spacer>
