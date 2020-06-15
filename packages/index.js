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
import Image from './image'
import Table from './table'
import Slider from './slider'
import Col from './col'
import Row from './row'
import Tooltip from './tooltip'
import Description from './description'
import Keyboard from './keyboard'
import Textarea from './textarea'
import Dot from './dot'
import Spacer from './spacer'
import Tabs from './tabs'
import Display from './display'
import User from './user'
import Grid from './grid'

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
  Image.install(vue)
  Table.install(vue)
  Slider.install(vue)
  Col.install(vue)
  Row.install(vue)
  Tooltip.install(vue)
  Description.install(vue)
  Keyboard.install(vue)
  Textarea.install(vue)
  Dot.install(vue)
  Spacer.install(vue)
  Tabs.install(vue)
  Display.install(vue)
  User.install(vue)
  Grid.install(vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  theme,
}
