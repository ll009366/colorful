import React from 'react'
import { storiesOf } from '@storybook/react'

const defaultMessage = () => (
 <div>
   此组件暂无使用演示
   <div>
    参数接收：in（布尔值，建议放控制元素显示隐藏的变量），timeout（动效持续时间ms），classNames（自定义动画类名前缀）
   </div>
   </div>
)




storiesOf('简单的动画', module)
  .add('基本使用', defaultMessage)
