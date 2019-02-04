const components = [
  require('./doc'),
  require('./blocks/side'),
]

export default {
  install: vue => {
    components
      .map(c => c.default)
      .forEach(c => vue.component(c.name, c))
  },
}
