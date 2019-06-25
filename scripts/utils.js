const fs = require('fs-extra')
const path = require('path')
const babelConfig = require('../babel.config')

const ident = 'useBuiltIns: false'
const base = `module.exports={"presets":[["@vue/app",{ ${ident} }]]}`

const setBabelConfig = (useBuiltIns = false) => {
  if (!useBuiltIns && JSON.stringify(babelConfig).includes('"useBuiltIns":false')) return

  const value = useBuiltIns ? '"usage"' : false
  const configStr = base
    .replace(ident, `useBuiltIns: ${value}`)
  const babelPath = path.join(__dirname, '../babel.config.js')
  fs.writeFileSync(babelPath, configStr)
}

module.exports = {
  setBabelConfig,
}
