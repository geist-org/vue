import Keyboard from './keyboard'

Keyboard.install = vue => {
  vue.component(Keyboard.name, Keyboard)
}

export default Keyboard
