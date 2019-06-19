import './utils/styles/index.styl'
import * as theme from './utils/theme'
import Card from './card'
import Avatar from './avatar'
import Badge from './badge'
import Button from './button'
import Checkbox from './checkbox'
import Code from './code'
import Collapse from './collapse'
import Fieldset from './fieldset'
import Input from './input'
import Select from './select'
import Footnote from './footnote'
import More from './more'
import Toggle from './toggle'
import Switcher from './switcher'
import Rate from './rate'
import Tag from './tag'
import Toast from './toast'
import Note from './note'
import Spinner from './spinner'
import Popover from './popover'
import Radio from './radio'
import Link from './link'
import Dialog from './dialog'
import Progress from './progress'
import Files from './files'
import Table from './table'

const install = vue => {
  Card.install(vue)
  Avatar.install(vue)
  Badge.install(vue)
  Button.install(vue)
  Checkbox.install(vue)
  Code.install(vue)
  Collapse.install(vue)
  Fieldset.install(vue)
  Input.install(vue)
  Select.install(vue)
  Footnote.install(vue)
  More.install(vue)
  Toggle.install(vue)
  Switcher.install(vue)
  Rate.install(vue)
  Tag.install(vue)
  Toast.install(vue)
  Note.install(vue)
  Spinner.install(vue)
  Popover.install(vue)
  Radio.install(vue)
  Link.install(vue)
  Dialog.install(vue)
  Progress.install(vue)
  Files.install(vue)
  Table.install(vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  theme,
}
