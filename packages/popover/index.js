import Popover from './popover'
import PopverItem from './popover-item'

Popover.install = vue => {
  vue.component(Popover.name, Popover)
  vue.component(PopverItem.name, PopverItem)
}

export default Popover
