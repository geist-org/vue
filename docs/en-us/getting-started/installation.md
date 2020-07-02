## Installation

### Install library

Ensure your have the latest version of <zi-link pure href="https://nodejs.org/en/download/">NodeJS</zi-link>,
and a package manager: <zi-link pure href="https://www.npmjs.com/">NPM</zi-link> or <zi-link pure href="https://yarnpkg.com/">Yarn</zi-link>.

1. Run script to download:

<zi-code bash>npm i @zeit-ui/vue</zi-code>

2. Import `@zeit-ui/vue` to your Vue project:

```js
import Vue from 'vue'
import ZeitUI from '@zeit-ui/vue'
import '@zeit-ui/vue/dist/zeit-ui.css' // require style

Vue.use(ZeitUI)
```

<br>

### CDN

Get the latest version from unpkg.com:

```
<link rel="stylesheet" href="//unpkg.com/@zeit-ui/vue@latest/dist/zeit-ui.css">
<script src="//unpkg.com/@zeit-ui/vue@latest/dist/zeit-ui.umd.js"></script>
```

You can also refer to [Example with UMD](https://github.com/zeit-ui/vue/blob/master/examples/umd/index.html)

<br>
<br>

### Import a component

`@zeit-ui/vue` supports import components when you actually need:

```js
import Vue from 'vue'
import Button from '@zeit-ui/vue/lib/button.common'
import '@zeit-ui/themes/index.css'
import '@zeit-ui/vue/lib/button.css'

Button.install(Vue)
```
