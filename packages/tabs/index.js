import Tabs from './tabs'
import TabsItem from './tabs-item'

Tabs.install = vue => {
  vue.component(Tabs.name, Tabs)
  vue.component(TabsItem.name, TabsItem)
}

export default Tabs
