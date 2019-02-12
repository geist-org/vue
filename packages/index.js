import Card from './card'
import Avatar from './avatar'
import Badge from './badge'
import Button from './button'
import Checkbox from './checkbox'
import Code from './code'
import Collapse from './collapse'
import Fieldset from './fieldset'
import Input  from './input'


export default {
  install: vue => {
    Card.install(vue)
    Avatar.install(vue)
    Badge.install(vue)
    Button.install(vue)
    Checkbox.install(vue)
    Code.install(vue)
    Collapse.install(vue)
    Fieldset.install(vue)
    Input.install(vue)
  },
}
