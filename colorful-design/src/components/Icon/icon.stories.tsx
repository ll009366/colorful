import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './Icon'
import Button from '../Button'

const defaultIcons = () => (
  <>
    <Icon icon="battery-half" size="2x"/>
    <Icon icon="calendar-check" size="2x"/>
    <Icon icon="door-open" size="2x"/>
    <Icon icon="file" size="2x"/>
  </>
)

const themeIcons = () => (
  <>
    <Icon icon="battery-half" size="2x" theme="success"/>
    <Icon icon="calendar-check" size="2x" theme="danger"/>
    <Icon icon="door-open" size="2x" theme="primary"/>
    <Icon icon="file" size="2x" theme="warning" />
  </>
)

const sizeTcons=()=>(
  <>
    <Icon icon="battery-half" size="3x" theme="success"/>
    <Icon icon="calendar-check" size="3x" theme="danger"/>
    <Icon icon="door-open" size="3x" theme="primary"/>
    <Icon icon="file" size="3x" theme="warning" />
  </>
)

const customIcons = () => (
  <>
    <Icon icon="spinner" size="3x" theme="primary" spin/>
    <Icon icon="spinner" size="3x" theme="success" pulse/>
  </>
)

storiesOf('图标', module)
  .add('基本使用', defaultIcons)
  .add('不同主题的', themeIcons)
  .add('更多行为的', customIcons, {info: {text: '更多例子请参见：https://github.com/FortAwesome/react-fontawesome#basic'}})
  .add('更多尺寸的的', sizeTcons)
  
