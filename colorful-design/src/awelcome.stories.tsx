import React from 'react'
import { storiesOf } from '@storybook/react'

const markdownText = `
该组件库仅供线下玩玩，请勿在上线项目中使用
说白就是功能少，太垃圾了，没办法一个月写出来的东西也就这写，还得工作，要累死人
希望8月份可以发布2.0
预期25个组件左右
`
storiesOf('快速上手', module)
  .add('welcome', () => {
    return (
      <div>
        <h2>欢迎来到 colorful-design 组件库</h2>
        <h4>推荐使用npm的安装方式，他能更好的与webpack配合使用</h4>
        <div style={{color:'red'}}>npm i colorful-design</div>
        <h4>在入口文件中引入样式</h4>
        <div style={{color:'red'}}>import "colorful-design/dist/index.css" </div>
        <h4>食用说明</h4>
        <div style={{color:'red'}}>文档点击右上角show info 查看使用方法</div>
      </div>
    )
  }, { info : { text: markdownText, source: false, }})