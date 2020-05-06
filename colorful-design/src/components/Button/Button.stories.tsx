import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../Icon'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const defaultButton = () => (
  <Button onClick={action('点击了button')}> default </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary </Button>
    <Button btnType="danger"> danger </Button>
    <Button btnType="link" href="https://google.com"> link </Button>
    <Button size="lg" btnType="primary"><Icon icon="check"/> check </Button>
  </>
)

const buttonWithIcon=()=>(
  <>
    <Button btnType="primary"><Icon icon="check"/> 确认 </Button>
    <Button btnType="danger"><Icon icon="check"/> 确认 </Button>
    <Button btnType="default"><Icon icon="check"/> 确认 </Button>
    <Button btnType="link"><Icon icon="check"/> 确认 </Button>
  </>
)

storiesOf('按钮', module)
  .add('基本使用', defaultButton)
  .add('不同尺寸的', buttonWithSize)
  .add('不同类型的', buttonWithType)
  .add('带有图标的', buttonWithIcon)