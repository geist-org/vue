## Icons

`@zeit-ui/vue` uses `@zeit-ui/icons` as a icon provider, you can use these icons through [@zeit-ui/icons](https://github.com/zeit-ui/vue-icons),
all icons automatically change according to the theme.

<zi-note type="warning">
You need to install <zi-code>@zeit-ui/icons</zi-code> if you want to use any icons.
</zi-note>

<zi-spacer :y="2"></zi-spacer>

### Install Icons

  1. Install package: <zi-code>yarn add @zeit-ui/vue-icons</zi-code>

  2. Import to Vue:
  ```vue
  import { install } from '@zeit-ui/vue-icons'
  import Vue from 'vue'
  
  install(Vue)
  ```

  3. Try use icon component:
  ```html
  <template>
    <zicon-apple/>
  </template>
  ```

<zi-spacer :y="2"></zi-spacer>

### Features

<br>

<zi-dot type="success">
All icons are of high quality, and each icon is a Vue Component.
</zi-dot>

<br>
<br>

<zi-dot type="success">
Support single icon import.
</zi-dot>

<br>
<br>

<zi-dot type="success">
All icons support theme switch.
</zi-dot>

<zi-spacer :y="2"></zi-spacer>


### Exhibits

<ex-exhibits></ex-exhibits>

<zi-spacer :y="3"></zi-spacer>
