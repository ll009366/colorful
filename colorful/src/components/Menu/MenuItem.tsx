import React, { FC, useState, createContext, CSSProperties,useContext } from 'react'
import classNames from 'classnames'
import { MenuContext} from './Menu';

export interface MenuItemProps {
    index?:  string;
    disabled?: boolean;//是否可点击
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext);

    const classes = classNames('menu-item', className, {
        "is-disabled": disabled,
        "is-active":context.index===index
    })

    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {  //点击选项时，当有onSelect 并且disabled部位true时才可以
            context.onSelect(index)
        }
    }

    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem';  //react 提供的静态方法，标记了这个组件的名字就是MenuItem

export default MenuItem