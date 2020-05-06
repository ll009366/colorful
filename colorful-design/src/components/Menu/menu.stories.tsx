import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './index'

export const defaultMenu = () => (
  <Menu defaultIndex='0' onSelect={action('selected!')} >
    <Menu.Item>
      cool link
    </Menu.Item>
    <Menu.Item>
      cool link 2
    </Menu.Item>
    <Menu.Item disabled>
      disabled
    </Menu.Item> 
    <Menu.SubMenu title="下拉选项">
      <Menu.Item>
        下拉选项一
      </Menu.Item>
      <Menu.Item>
        下拉选项二
      </Menu.Item>    
    </Menu.SubMenu>
  </Menu>
)
export const clickMenu = () => (
  <Menu defaultIndex='0' onSelect={action('selected!')} mode="vertical">
    <Menu.Item>
      cool link
    </Menu.Item>
    <Menu.Item>
      cool link 2
    </Menu.Item>
    <Menu.SubMenu title="点击下拉选项">
      <Menu.Item>
        下拉选项一
      </Menu.Item>
      <Menu.Item>
        下拉选项二
      </Menu.Item>    
    </Menu.SubMenu>
  </Menu>
)
export const openedMenu = () => (
  <Menu defaultIndex='0' onSelect={action('selected!')} mode="vertical" defaultOpenSubMenus={['2']}>
    <Menu.Item>
      cool link
    </Menu.Item>
    <Menu.Item>
      cool link 2
    </Menu.Item>
    <Menu.SubMenu title="默认展开下拉选项">
      <Menu.Item>
        下拉选项一
      </Menu.Item>
      <Menu.Item>
        下拉选项二
      </Menu.Item>    
    </Menu.SubMenu>
  </Menu>
)

storiesOf('菜单', module)
.add('基本使用', defaultMenu )
.add('纵向的', clickMenu)
.add('默认展开的纵向', openedMenu)