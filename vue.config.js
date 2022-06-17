const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: "examples/main.ts",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  devServer: {
    open: true
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve('packages')
      }
    },
    devtool: 'eval-source-map',
    plugins: [
      require('unplugin-vue-define-options/webpack')()
    ]
  }
}
