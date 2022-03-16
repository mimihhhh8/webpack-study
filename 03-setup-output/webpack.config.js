const path = require('path')
const HtmlWbpackPlugins = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),//获取到当前文件所在的路径
        filename: 'bundle.js',
        clean:true//清理打包之前的文件
    },

    plugins:[
        new HtmlWbpackPlugins({
            template:'./index.html',
            filename:'app.html',
            inject:'body'
        }) 
    ]

//     module: {
//       rules: [
//           {
//               test: /\.js/,
//               use: [path.resolve(__dirname, './src/loaders/replaceLoader.js')]
//           }
//       ]
//   },
}