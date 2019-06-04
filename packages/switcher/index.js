import Switcher from './switcher'
import SwitcherItem from './switcher-item'

Switcher.install = vue => {
  vue.component(Switcher.name, Switcher)
  vue.component(SwitcherItem.name, SwitcherItem)
}

export default Switcher
