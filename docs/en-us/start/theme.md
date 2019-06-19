## Theme

`@zeit-ui/vue` support **Dark Mode** now. You can switch theme at any time through a very simple API, 
no third-party styles or configs.

### Usage

You can use this API anywhere, all components are updated automatically.

```js
import ZeitUI from '@zeit-ui/vue'

ZeitUI.theme.setTheme('zi-dark-theme')
ZeitUI.theme.subscribeChange('zi-light-theme')
```

### API

| Method | Description | Params | Example |
| ---------- | ---------- | -------------- | ---- |
| **setTheme** | setup theme | `(themeName: string)` | `setTheme('zi-dark-theme')` |
| **getCurrentTheme** | get actived theme name | - | `getCurrentTheme()` |
| **getAllThemes** | get all themes | - | `getAllThemes()` |
| **subscribeChange** | subscribe to Theme change events | `(fn: Function)` | `subscribeChange((name) => console.log(name))` |




