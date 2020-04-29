import React, { FC, useState, createContext, CSSProperties, useContext } from 'react'
import classNames from 'classnames';
import Transition from '../Transition/Transition';
import { MenuContext } from './Menu';
import { MenuItemProps } from './MenuItem';
import Icon from '../Icon/Icon';

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { className, children, index, title } = props;

    const context = useContext(MenuContext);
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [menuOpen,setMenuOpen]=useState(isOpend)

    const classes = classNames('menu-item submenu-item', className, {
        "is-active": context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    })

    const handleClick=(e: React.MouseEvent)=>{
        e.preventDefault()
        setMenuOpen(!menuOpen)
    }

    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
      clearTimeout(timer)
      e.preventDefault()
      timer = setTimeout(() => {
        setMenuOpen(toggle)
      }, 300)
    }
    const clickEvents = context.mode === 'vertical' ? {
      onClick: handleClick
    } : {}
    const hoverEvents = context.mode !== 'vertical' ? {
      onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
      onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
    } : {}


    const renderChildren = () => {
        const SubMenuClasses=  classNames("color-submenu",{
            "menu-opened":menuOpen
        })

        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                  })
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component(menu组件里面必须是menuItem)")
            }
        })

        return (
            <Transition
                in={menuOpen}//in为true时候，classNames会被添加enter字段，并在下一刻添加active。如：zoom-in-top-enter
                timeout={200}
                classNames='zoom-in-top'
            >
                <ul className={SubMenuClasses}>
                {childrenComponent}
                </ul>
            </Transition>
        )
    }

    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon icon='angle-down' className='arrow-icon' />
            </div>
            {renderChildren()}
        </li>
    )

}
SubMenu.displayName="SubMenu"

export default SubMenu