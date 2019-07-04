import Image from './image'

Image.install = vue => {
  vue.component(Image.name, Image)
}

export default Image
