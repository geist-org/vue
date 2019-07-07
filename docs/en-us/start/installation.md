## Installation

### Install library

<br/>

<zi-note>
Ensure your have the latest version of <zi-link href="https://nodejs.org/en/download/">NodeJS</zi-link>, 
and also need a package manager of NodeJS: <zi-link href="https://www.npmjs.com/">NPM</zi-link> or <zi-link href="https://yarnpkg.com/">Yarn</zi-link>.
</zi-note>

<br/>

1. Run script to download:

<zi-code bash>npm i @zeit-ui/vue</zi-code>

2. Import `@zeit-ui/vue` to your Vue project (don't forget to import styles):

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

### Import a component

`@zeit-ui/vue` supports import components when you actually need. e.g.:

```js
import Vue from 'vue'
import Button from '@zeit-ui/vue/lib/button.common'
import '@zeit-ui/vue/lib/button.css'

Button.install(Vue)
```

