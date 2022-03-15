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
- 3、pwd 查看当前的工作目录
- 4、安装webpack 
 a、全局安装(不推荐)：npm install webpack webpack-cli --global  可以在任何目录下执行webpack; webpack -v
 b、项目目录下安装：npm install webpack webpack-cli --save-dev


# p10运行webpack
- 1、webpack.config.js什么都不配置的情况下，运行npm webpack,会自动生成dist文件夹，并默认生成main.js文件
 ## 学习进度（https://www.bilibili.com/video/BV1YU4y1g745?p=9&spm_id_from=pageDriver） p9  

 # p12 小结

 # p13 什么是插件 plugins
 # p14 html-webpack-plugin插件学习