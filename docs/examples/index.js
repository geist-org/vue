const context = require.context('./', true, /\.vue$/)
const templateContext = require.context('!raw-loader!./', true, /\.vue$/)
const assignMetaTemplate = (component, meta) => {
  if (typeof component === 'string') return null
  const methods = Object.assign(component.methods || {}, {
    _meta: () => meta,
  })
  return Object.assign(component, { methods })
}

export default {
  install: vue => {
    context
      .keys()
      .map(path => {
        const exampleModule = context(path)
        return assignMetaTemplate(exampleModule.default, templateContext(path))
      })
      .filter(r => r)
      .forEach(exModule => vue.component(exModule.name, exModule))
  },
}
