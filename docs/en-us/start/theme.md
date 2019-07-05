## Theme

`@zeit-ui/vue` support **Dark Mode** now. You can switch theme at any time through a very simple API, 
no third-party styles or configs.

<br>

### Toggle Theme

You can use this API anywhere, all components are updated automatically.

```js
import ZeitUI from '@zeit-ui/vue'

ZeitUI.theme.enableLight()
ZeitUI.theme.enableDark()
```

<br>

### Colors

`@zeit-ui/vue` uses `@zeit-ui/themes` as a theme & color provider, you can see detailed basic variable settings in repo [@zeit-ui/themes](https://github.com/zeit-ui/themes).
Of course, you can also override these variables in your own projects.

`@zeit-ui/vue` contains `themes` by default.

<br>

### Icons

`@zeit-ui/vue` uses `@zeit-ui/icons` as a icon provider, you can use these icons through [@zeit-ui/icons](https://github.com/zeit-ui/vue-icons), 
all icons automatically change according to the theme.

<br/>

### Typographic

Similar to themes and icons, typographic is provide by a separate repository: [@zeit-ui/typographic](https://github.com/zeit-ui/typographic).

`@zeit-ui/vue` contains `typographic` by default.




