import Tag from './tag'

Tag.install = vue => {
  vue.component(Tag.name, Tag)
}

export default Tag
