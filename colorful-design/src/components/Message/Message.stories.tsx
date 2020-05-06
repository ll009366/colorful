import React from 'react'
import { storiesOf } from '@storybook/react'
import Message from './Message'

import Button from '../Button'

const defaultMessage = () => (
  <Button onClick={()=>{Message.warning('警告',2000)}}> message </Button>
)


const messageWithType = () => (
  <>
    <Button btnType="primary"  onClick={()=>{Message.warning('警告',2000)}}> warning </Button>
    <Button btnType="primary"  onClick={()=>{Message.success('成功',2000)}}> success </Button>
    <Button btnType="primary"  onClick={()=>{Message.error('错误',2000)}}> error </Button>
  </>
)

const messageWithTime=()=>(
  <>
    <Button btnType="primary"  onClick={()=>{Message.warning('警告',4000)}}> warning 4s </Button>
    <Button btnType="primary"  onClick={()=>{Message.success('成功',4000)}}> success 4s </Button>
    <Button btnType="primary"  onClick={()=>{Message.error('错误',4000)}}> error 4s </Button>
  </>
)

storiesOf('轻提示', module)
  .add('基本使用', defaultMessage)
  .add('不同类型的', messageWithType)
  .add('带有图标的', messageWithTime)