<!-- 教程地址 https://www.bilibili.com/video/BV1YU4y1g745?p=3&spm_id_from=pageDriver-->
## 1、安装
- npm init 
- npm install webpack webpack-cli --save-dev
- 创建webpack.config.js文件
- 打包npx webpack

## 2、webpack工作模式
- production
- development
- none 

## 3、修改webpack模式的两种方式
- 通过命令行--mode
- 通过配置文件设置mode属性

## 4、如何通过loader实现特殊资源加载

# p6 webpack的竞品
-  1、parcel: 零配置
-  2、rollup.js：标准化，一般只能用来打包js
-  3、webpack：复杂的库
-  4、vite：下一代的构建工具，vite将成为vue的现代框架，基于esmodule,和vue3的完美结合

# p7
- 如何引入js代码，通过script标签，解决作用域的方法，利用立即调用函数

# p9安装webpack
- 1、安装node  node -v
- 2、node安装成功之后npm会安装成功  npm -v
- 3、pwd 查看当前的工作目录(print work directory)
- 4、安装webpack 
 a、全局安装(不推荐)：npm install webpack webpack-cli --global  可以在任何目录下执行webpack; webpack -v
 b、项目目录下安装：npm install webpack webpack-cli --save-dev


# p10运行webpack 
- 1、webpack.config.js什么都不配置的情况下，运行npm webpack,会自动生成dist文件夹，并默认生成main.js文件
 ## 学习进度（https://www.bilibili.com/video/BV1YU4y1g745?p=9&spm_id_from=pageDriver） p9  

 # p12 小结

 # p13 什么是插件 plugins
 # p14 html-webpack-plugin插件学习
 - 1、
  ```js
       plugins:[
        new HtmlWbpackPlugins()//完成index.html,在dist文件夹中生成index.html
    ]
  ```

- 2、添加配置指定引入打包文件的位置
```js
     plugins:[
        new HtmlWbpackPlugins({
            template:'./index.html',
            filename:'app.html',//npx webpack打包之后dist文件夹中生成的html文件叫做index.html
            inject:'body '//指定script标签引入的bundle.js在body中
        })//让外部的index.html和打包的html关联起来，
    ]
```

# p15 如何清理dist
```json
    output: {
        path: path.resolve(__dirname, './dist'),//获取到当前文件所在的路径
        filename: 'bundle.js',
        clean:true//清理打包之前的文件
    },
```

# p16 搭建开发环境
- 1、待解决的问题：
  （1）通过复制dist目录下的app.html的完整的物理路径，然后粘贴到浏览器的地址栏访问页面，更新代码需手动再打包

- 2、devtool:'inline-source-map',//没有此配置，代码书写错误打包后报错是在打包的文件中提示，添加此配置之后会报错会定位到原文件代码出错的位置

# p19 使用watch mode（需手动刷新浏览器）
npx webpack --watch 实时监测js的变化（保存代码之后刷新页面，内容已经被监测到）

# p20 使用webpack-dev-server自动刷新浏览器(实时重新加载页面的功能，启动之后在目标文件夹中是看不到编译后的文件，实时编译后的文件都保存在了内存当中)
- 1、npm install webpack-dev-server -D
- 2、配置 
```json
  devServer:{
        static:'./dist'
    }
```
- 3、启动 npx webpack-dev-server 
- 4、打开页面 http://localhost:8080/ 

# p22 资源模块介绍
- 1、四种新的模块类型
  （1）asset/resource 发送一个单独的文件并导出URL,之前通过使用file-loader实现
  （2）asset/inline 导出一个资源的data URL,之前通过url-loader实现
  （3）asset/source 导出资源的源代码，之前通过raw-loader实现
  （4）asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

# p23 resource资源(05-asset-modules)
- 1、配置webpack.config.json
```json
    module:{
        rules:[
            {
                test:/\.png$/,
                type:'asset/resource'
            }
        ]
    }
```
- 2、src的index.js中
```js
import imgsrc from './assets/1.png'

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)
```

- 3、打包 npx webpack  在dist中出现自定义命名的图片
- 4、尝试在浏览器预览 执行npx webpack-dev-server

- 5、指定图片打包的路径 (生成资源的路径和名称)
-  方法一：assetModuleFilename:'images/[contenthash][ext]' ('images/test.png')
不可能所有的资源叫做test.png
contenthash:根据文件的内容生成哈希的字符
ext:表示扩展名
-  方法二 (generator优先级比assetModuleFilename高)
```json
 generator:{
      filename:'images/[contenthash][ext]'
  }
```

# p24 inline资源(05-asset-modules)
# p25 source资源(05-asset-modules)

# 26 asset 通用资源(05-asset-modules)
