const path = require('path')
const Prism = require('prismjs')

const isBuildLib = process.env.npm_lifecycle_event === 'build:lib'
const styleModule = isBuildLib
  ? [path.resolve(__dirname, 'packages/utils/styles/methods')]
  : [path.resolve(__dirname, 'src/assets/styles/index'), path.resolve(__dirname, 'packages/utils/styles/methods')]

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: styleModule,
      },
    },
  },

  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },

  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        wrapper: 'div',
        highlight: str => {
          return Prism.highlight(str, Prism.languages.javascript, 'javascript')
        },
      })

    config.resolve
      .alias
      .set('#', path.join(__dirname, './'))
  },
}
