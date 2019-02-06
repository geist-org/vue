const examples = [
  require('./card'),
  require('./avatar'),
  require('./badge'),
]


const assignMetaTemplate = (component, meta) => {
  if (typeof component === 'string') return null
  const methods = Object.assign(component.methods || {}, {
    _meta: () => meta,
  })
  return Object.assign(component, {methods})
}

const findTemplate = (modules, name) => modules[`${name}Template`] || null

export default {
  install: (vue) => {
    examples.forEach(modules => {
      Object.keys(modules)
        .map(name => assignMetaTemplate(modules[name], findTemplate(modules, name)))
        .filter(r => r)
        .forEach(exModule => {
          vue.component(exModule.name, exModule)
        })
    })
  },
}
