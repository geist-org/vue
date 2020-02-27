## Themes

`@zeit-ui/vue` support **Dark Mode** now. You can switch theme at any time through a very simple API,
no third-party styles or configs.

<br>

### Switch themes

You can use this `API` anywhere, all components are updated automatically.

```js
import ZeitUI from '@zeit-ui/vue'

ZeitUI.theme.enableLight()
ZeitUI.theme.enableDark()
```

<br>

### Custom theme

`@zeit-ui/vue` uses `@zeit-ui/themes` as a theme & color provider, you can see the detailed variable settings in repo [@zeit-ui/themes](https://github.com/zeit-ui/themes).

<zi-note>
<code>@zeit-ui/vue</code> contains <code>@zeit-ui/themes</code> by default.
</zi-note>

<br>

Of course, you can also override these variables in your own projects:

<zi-spacer :y="1"></zi-spacer>

<zi-description title="Step.1">
  Read all css variables <zi-link color href="https://github.com/zeit-ui/themes/blob/master/src/default/index.styl">here</zi-link>.
</zi-description>
<br>
<br>
<zi-description title="Step.2">
  Set global css variables to override default:
  <zi-code block>html {
  --accents-1: #fff;
}</zi-code>
</div>

</zi-description>

<br>

### Custom component style

`Vue` supports declaring `css class` directly on components, you don't have to hack anything to change the style:

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
