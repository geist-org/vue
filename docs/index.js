const enContext = require.context('./en-us/', true, /\.md$/)
const zhContext = require.context('./zh-cn/', true, /\.md$/)

const pickGroupName = name => {
  const result = name.match(/\.\/(\S+)\//)
  if (!result || !result.length) return ''
  return result[1]
}

const makeModules = context => {
  return context.keys().map(path => {
    const mdModule = context(path)
    const name = path.split('/').reverse()[0]
    mdModule.default.groupName = pickGroupName(path) || 'default'
    mdModule.default.docName = name.replace(/.md/, '')
    return mdModule
  })
}
const enModule = makeModules(enContext)
const zhModule = makeModules(zhContext)

export default {
  'en-us': enModule,
  'zh-cn': zhModule,
}
