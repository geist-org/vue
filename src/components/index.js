const components = [
  require('./doc'),
  require('./blocks/side'),
  require('./examples/code_render'),
  require('./examples/code')
]

export default {
  install: vue => {
    components
      .map(c => c.default)
      .forEach(c => vue.component(c.name, c))
  },
}
