import React, { FC, useState, createContext, CSSProperties } from 'react'
import classNames from 'classnames'
import { MenuItemProps} from './MenuItem';

type MenuMode = 'horizontal' | 'vertical';
type selectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;//默认页
    className?: string;
    mode?: MenuMode;//横向纵向
    style?: CSSProperties;
    onSelect?: selectCallback;//点击后的回调
    defaultOpenSubMenus?: string[];//默认打开哪个
}

interface IMenuContext {  //用context来向子组件传递信息
    index: string;
    onSelect?: selectCallback;
    mode?:MenuMode;
    defaultOpenSubMenus?: string[];//默认打开哪个
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });//将信息传过去，默认选中的index为0

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex,onSelect,defaultOpenSubMenus } = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex);

    const handleClick = (index:string) => {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index)
        }
    }

    const passedContext: IMenuContext = {  //注入Provider 的信息，包含当前选中的选项和一个函数
        index: currentActive ? currentActive :'0',
        onSelect:handleClick,
        mode:mode,
        defaultOpenSubMenus
    }

    const classes = classNames('color-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal',

    })

    const renderChildren = () => { //判断Menu组件里写的全是MenuItem，如果不是则抛出错误
        return React.Children.map(children, (child, index) => { //因为children不一定的是数组，所以不直接用map循环，用react提供的方法来
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;//类型断言，将所所有的react节点转换成FunctionComponentElement，这样就可以判断子组件的类型
            const { displayName } = childElement.type;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, {  //这里利用react克隆的方法，在上面动态添加了 index
                    index: index.toString()
                })
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component(menu组件里面必须是menuItem)")
            }
        })
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode:"horizontal",
    defaultOpenSubMenus:[]

}

export default Menu

