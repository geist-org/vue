## Installation

### Install library

<br/>

<zi-note>
Ensure your have the latest version of <zi-link src="https://nodejs.org/en/download/">NodeJS</zi-link>, 
and also need a package manager of NodeJS: <zi-link src="https://www.npmjs.com/">NPM</zi-link> or <zi-link src="https://yarnpkg.com/">Yarn</zi-link>.
</zi-note>

<br/>

1. Run script to download: `npm i @zeit-ui/vue`.

2. Import `@zeit-ui/vue` to your Vue project (don't forget to import styles):

```js
import Vue from 'vue'
import ZeitUI from '@zeit-ui/vue'
import '@zeit-ui/vue/dist/zeit-ui.css' // require style
Vue.use(ZeitUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

<br>

### CDN
Get the latest version from unpkg.com:

```jsx
<link rel="stylesheet" href="//unpkg.com/@zeit-ui/vue@latest/dist/zeit-ui.css">

<script src="//unpkg.com/@zeit-ui/vue@latest/dist/zeit-ui.umd.js"></script>
```

You can also refer to [umd example](https://github.com/zeit-ui/vue/tree/master/examples/umd)

<br>

### Import a component

`@zeit-ui/vue` supports import components when you actually need. e.g.:

```js
import Vue from 'vue'
import '@zeit-ui/vue/lib/button.css'
import Button from '@zeit-ui/vue/lib/button.common'

Button.install(Vue)
```

