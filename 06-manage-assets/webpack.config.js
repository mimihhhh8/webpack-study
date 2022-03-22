const path = require('path')
const HtmlWbpackPlugins = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),//获取到当前文件所在的路径
        filename: 'bundle.js',
        clean:true,//清理打包之前的文件
        // assetModuleFilename:'images/[contenthash][ext]'
    },

    mode:'development',//设置为开发模式
    devtool:'inline-source-map',//没有此配置，代码书写错误打包后报错是在打包的文件中提示，添加此配置之后会报错会定位到原文件代码出错的位置
    plugins:[
        new HtmlWbpackPlugins({
            template:'./index.html',
            filename:'app.html',
            inject:'body'
        }),

        new MiniCssExtractPlugin({
            filename:'styles/[contenthash].css'//自定义打包的css名称，默认main.css
        })
    ],

    // npm install webpack-dev-server -D
    devServer:{
        static:'./dist'
    },

    module:{
        rules:[
            // asset/resource
            {
                test:/\.png$/,
                type:'asset/resource',
                generator:{
                    filename:' images/[contenthash][ext]'
                }
            },
            // asset/inline
            {
                test:/\.svg$/,// /ed$/仅匹配处于字符串结尾的 ed，比如 opened、closed，而类似于 edge、bedroom 这些虽然包含 ed，但是不在结尾的，则会匹配失败。
                type:'asset/inline'
            },
            // asset/source
            {
                test:/\.txt$/,
                type:'asset/source'
            },
            // asset
            {
                test:/\.jpg$/,
                type:'asset'
            },
            
            {
                test:/\.(css|less)$/,
                // use:['style-loader','css-loader','less-loader'],//p29 使用css-loader在打包css的时候不会报错，使用style-loader使得css在页面生效(顺序：从后往前开始加载 )
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader'] //p30 单独抽离css style-loader无效  打包后在dist文件夹中生成main.css文件，将两个css文件合并到了一个文件中
            },

        ]
    },

    optimization:{
        minimizer:[
            new CssMinimizerPlugin()
        ]
    }

}