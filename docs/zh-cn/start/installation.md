## Installation

### Install library
1. Ensure your have the latest version of [NodeJS](https://nodejs.org/en/download/), 
and also need a package manager, [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

2. run script to download, npm: `npm i @zeit-ui/vue` or yarn: `yarn add @zeit-ui/vue`.

3. import `@zeit-ui/vue` to your Vue project (don't forget to import styles):

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

<br>

### Import a component

`@zeit-ui/vue` supports import components when you actually need. e.g.:

```js
import Vue from 'vue'
import Button from '@zeit-ui/vue/packages/button'

Button.install(Vue)
```

