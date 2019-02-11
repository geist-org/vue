const context = require.context('./zh-cn/', true, /\.md$/)

const pickGroupName = (name) => {
  const result = name.match(/\.\/(\S+)\//)
  if (!result || !result.length) return ''
  return result[1]
}
const mdModules = context.keys().map(path => {
  const mdModule = context(path)
  const name = path.split('/').reverse()[0]
  mdModule.default.groupName = pickGroupName(path) || 'default'
  mdModule.default.docName = name.replace(/.md/, '')
  return mdModule
})

export default mdModules
