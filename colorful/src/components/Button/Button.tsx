import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes,useRef,useState } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
    onMouseDown?: any;
    onMouseUp?:any;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>//将原生的button和定义的属性结合 & ->联合属性   下面是a链接的属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>// Partial 修饰符 表示可选的

const Button: FC<ButtonProps> = (props) => {
    const { btnType, disabled, size, children, href, onMouseDown, onMouseUp, className, ...restProps } = props;

    const btnRef = useRef<HTMLButtonElement>(null);

    const classes = classNames('btn', className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled':(btnType==='link') && disabled
    });


    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onMouseDown) {
            onMouseDown()
        }
        if (btnRef.current) {
            btnRef.current.className = 'btn-animation' + " " + classes
        }
    }

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onMouseUp) {
            onMouseUp()
        }
        if (btnRef.current) {
            btnRef.current.className =  classes
        }
    }

    if (btnType === 'link' && href) {
        return <a className={classes} href={href} {...restProps }>{children}</a>;
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps} ref={btnRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                {children}
            </button >
        );
    }
}
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button