const components = [
  require('./doc'),
  require('./blocks/side'),
  require('./examples/code_render'),
  require('./examples/code'),
  require('./examples/footer'),
]

export default {
  install: vue => {
    components
      .map(c => c.default)
      .forEach(c => vue.component(c.name, c))
  },
}
