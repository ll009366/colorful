import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from './Tabs'
import TabItem from './tabItem'
import Icon from '../Icon/Icon'
const defaultTabs = () => (
  <Tabs onSelect={action('selected')}>
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二">this is content two</TabItem>
    <TabItem label="用户管理">this is content three</TabItem>
  </Tabs>
)

const cardTabs = () => (
  <Tabs onSelect={action('selected')} type="card">
    <TabItem label='card1'>this is card one</TabItem>
    <TabItem label="card2">this is content two</TabItem>
    <TabItem label="disabled" disabled>this is content three</TabItem>
  </Tabs> 
)

const customTabs = () => (
  <Tabs onSelect={action('selected')} type="card">
    <TabItem label={<><Icon icon="check-circle" />  自定义图标</>}>this is card one</TabItem>
    <TabItem label="tab2">this is content two</TabItem>
  </Tabs> 
)
storiesOf('标签页', module)
  .add('Tabs', defaultTabs)
  .add('选项卡样式的Tabs', cardTabs)
  .add('自定义选项卡样式', customTabs)