import React, { FC, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'
export interface TabsProps {
  /**当前激活 tab 面板的 index，默认为0 */
  defaultIndex?: number;
  /**可以扩展的 className */
  className?: string;
  /**点击 Tab 触发的回调函数 */
  onSelect?: (selectedIndex: number) => void;
  /**Tabs的样式，两种可选，默认为 line */
  type?: 'line' | 'card';
}

/**
 * 选项卡切换组件。
 * 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 * 
 * ~~~js
 * import { Tabs } from 'vikingship'
 * ~~~
 */
export const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    className,
    onSelect,
    children,
    type
  } = props
  const [ activeIndex, setActiveIndex ] = useState(defaultIndex)
  const handleClick = (e: React.MouseEvent, index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index)
      if (onSelect) {
        onSelect(index)
      }
    }
  }
  const navClass = classNames('color-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  })
  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>
      const { label, disabled } = childElement.props
      const classes = classNames('color-tabs-nav-item', {
        'is-active': activeIndex === index,
        'disabled': disabled,
      })
      return (
        <li 
          className={classes} 
          key={`nav-item-${index}`}
          onClick={(e) => {handleClick(e, index, disabled)}}
        >
          {label}
        </li>
      )
    })
  }
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child
      }
    })
  }
  return (
    <div className={`color-tabs ${className}`}>
      <ul className={navClass}>
        {renderNavLinks()}
      </ul>
      <div className="color-tabs-content">
        {renderContent()}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line'
}
export default Tabs;