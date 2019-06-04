import Select from './select'
import SelectOption from './select-option'

Select.install = vue => {
  vue.component(Select.name, Select)
  vue.component(SelectOption.name, SelectOption)
}

export default Select
