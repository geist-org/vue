## Installation

### Install library

Ensure your have the latest version of <zi-link pure href="https://nodejs.org/en/download/">NodeJS</zi-link>,
and a package manager: <zi-link pure href="https://www.npmjs.com/">NPM</zi-link> or <zi-link pure href="https://yarnpkg.com/">Yarn</zi-link>.

1. Run script to download:

<zi-code bash>npm i @geist-ui/vue</zi-code>

2. Import `@geist-ui/vue` to your Vue project:

```js
import Vue from 'vue'
import GeistUI from '@geist-ui/vue'
import '@geist-ui/vue/dist/geist-ui.css' // require style

Vue.use(GeistUI)
```

<br>

### CDN

Get the latest version from unpkg.com:

```
<link rel="stylesheet" href="//unpkg.com/@geist-ui/vue@latest/dist/geist-ui.css">
<script src="//unpkg.com/@geist-ui/vue@latest/dist/geist-ui.umd.js"></script>
```

You can also refer to [Example with UMD](https://github.com/geist-org/vue/blob/master/examples/umd/index.html)

<br>
<br>

### Import a component

`@geist-ui/vue` supports import components when you actually need:

```js
import Vue from 'vue'
import Button from '@geist-ui/vue/lib/button.common'
import '@geist-ui/themes/index.css'
import '@geist-ui/typography/index.css'
import '@geist-ui/vue/lib/button.css'

Button.install(Vue)
```
