const examples = [
  require('./card'),
]

export default {
  install: (vue) => {
    examples.forEach(modules => {
      Object.keys(modules)
        .map(name => modules[name])
        .forEach(exModule => vue.component(exModule.name, exModule))
    })
  },
}
