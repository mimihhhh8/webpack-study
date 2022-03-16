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

    mode:'development',//设置为开发模式
    devtool:'inline-source-map',//没有此配置，代码书写错误打包后报错是在打包的文件中提示，添加此配置之后会报错会定位到原文件代码出错的位置
    plugins:[
        new HtmlWbpackPlugins({
            template:'./index.html',
            filename:'app.html',
            inject:'body'
        }) 
    ],

    // npm install webpack-dev-server -D
    devServer:{
        static:'./dist'
    }


}