const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//获取到当前文件所在的路径
        filename: '[name].js'
    },

    module: {
      rules: [
          {
              test: /\.js/,
              use: [path.resolve(__dirname, './src/loaders/replaceLoader.js')]
          }
      ]
  },
}