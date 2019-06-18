const path = require('path')

const isBuildLib = process.env.npm_lifecycle_event === 'build:lib'
const styleModule = isBuildLib
  ? [path.resolve(__dirname, 'packages/utils/styles/base')]
  : [path.resolve(__dirname, 'src/assets/styles/index'), path.resolve(__dirname, 'packages/utils/styles/base')]

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: styleModule,
      },
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
      })

    config.resolve
      .alias
      .set('#', path.join(__dirname, './'))
  },
}
