const { execSync } = require('child_process')
const path = require('path')
const project_path = path.join(__dirname, '../../')
const source = `${project_path}/node_modules/@zeit-ui/style/dist/style.css`
const target = `${project_path}/dist/style.css`

execSync(`cp ${source} ${target}`)
