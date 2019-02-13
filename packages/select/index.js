import Select from './select'
import SelectOption from './select_option'

Select.install = vue => {
  vue.component(Select.name, Select)
  vue.component(SelectOption.name, SelectOption)
}

export default Select
