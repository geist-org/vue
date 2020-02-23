## Theme

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

### Colors

`@zeit-ui/vue` uses `@zeit-ui/themes` as a theme & color provider, you can see the detailed variable settings in repo [@zeit-ui/themes](https://github.com/zeit-ui/themes).

Of course, you can also override these variables in your own projects.

<zi-note>
<code>@zeit-ui/vue</code> contains <code>@zeit-ui/themes</code> by default.
</zi-note>

<br>
<br>

### Typographic

Similar to themes and icons, typographic is provide by a separate repository: [@zeit-ui/typographic](https://github.com/zeit-ui/typographic).

<zi-note>
<code>@zeit-ui/vue</code> contains <code>@zeit-ui/typographic</code> by default.
</zi-note>

<br/>
<br/>

### Icons

`@zeit-ui/vue` uses `@zeit-ui/icons` as a icon provider, you can use these icons through [@zeit-ui/icons](https://github.com/zeit-ui/vue-icons),
all icons automatically change according to the theme.

<zi-note type="warning">
You need to install <zi-link color href="https://github.com/zeit-ui/vue-icons">@zeit-ui/icons</zi-link> if you want to use any icons.
</zi-note>

- Install: `yarn add @zeit-ui/vue-icons`

- Import to project:

    ```js
    import { install } from '@zeit-ui/vue-icons'
    install(Vue)
    ```

- [more documents for icons](https://zeit-vue-icons.now.sh/)


