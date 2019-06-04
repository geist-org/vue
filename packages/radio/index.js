import Radio from './radio'
import RadioGroup from './radio-group'

Radio.install = vue => {
  vue.component(Radio.name, Radio)
  vue.component(RadioGroup.name, RadioGroup)
}

export default Radio
