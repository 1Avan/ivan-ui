const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      //修改项目的入口文件
      entry:'example/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  },
  chainWebpack:config=>{
    config.module
    .rule('js')
    .include.add(path.resolve(__dirname,'package')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options=>{
      // 修改它的选项
      return options
    })
    //设置@对应文件为example
    config.resolve.alias
    .set('@', path.resolve(__dirname, 'example'))

  },

  lintOnSave:false,
  transpileDependencies: true
})
