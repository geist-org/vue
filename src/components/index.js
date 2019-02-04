const components = [
  require('./doc'),
  require('./blocks/side'),
  require('./blocks/content'),
]

export default {
  install: vue => {
    components
      .map(c => c.default)
      .forEach(c => vue.component(c.name, c))
  },
}
