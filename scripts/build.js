const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')

const packagePath = path.join(__dirname, '../packages')
const args = ['build', '--target', 'lib', '--name', 'zeit-ui', './packages/index.js']
const log = (text) => `\x1b[37m${text}\x1b[2m\x1b[0m`
const cyan = (text) => `\u001b[36m${text}\u001b[39m`

const getPackages = async () => {
  const files = await fs.readdir(packagePath)
  return files
    .filter(name => name !== 'index.js' && name !== 'utils')
}

const runPackage = async (name, count) => {
  await execa('vue-cli-service', [
    'build',
    '--target', 'lib',
    '--dest', 'lib',
    '--name', name,
    `./packages/${name}/index.js`,
  ])
  console.log(
    '\u001B[1A',
    log(`> Lib bundle ${cyan(name)} ${log('done. No.' + count)}      `),
  )
}

const bundleComponents = async () => {
  const packages = await getPackages()
  const dest = path.join(__dirname, '../lib')
  await fs.remove(dest)
  await fs.mkdir(dest)
  console.log(log(`\u001B[1A> Package ready, ${packages.length}.      `))
  let count = 0

  // circle-ci memory limit
  // create multiple subprocesses results in insufficient memory
  if (process.env.CIRCLE_JOB === 'package') {
    for (const name of packages) {
      count ++
      await runPackage(name, count)
    }
  } else {
    await Promise.all(packages.map(async name => {
      count ++
      await runPackage(name, count)
    }))
  }

  console.log(
    '\u001B[1A',
    log(`> Libs bundle done. Count ${count}.               `),
  )
}

const buildMain = async () => {
  const { stdout } = execa('vue-cli-service', args)
  stdout.pipe(process.stdout)
}

const build = async () => {
  console.log(log('> collect packages...'))
  await bundleComponents()
  await buildMain()
}

build()
  .catch(err => {
    console.log(`Build Err: ${err}`)
  })
