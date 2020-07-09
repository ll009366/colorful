import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames';

export interface CardProps {
    className?: string;
    style?: CSSProperties;
    title?: string;
    hoverable?: boolean;
  }

export const Card: FC<CardProps> = (props) => {
    const {className,style, children,title,hoverable }=props;

    const classes=classNames('color_card',className,{
      "color_card_shadow":hoverable
    });

    const classesHead=classNames('color_card_head',{
      "color_card_head_hide" : !title
    })
    return (
      <div className={classes} style={style}>
          <div className={classesHead}>
              <div className='color_card_head_title' >{title}</div>
          </div>
          <div className='color_card_content'>
            {children}
          </div>
      </div>
    )
  }
  
  Card.defaultProps = {
    hoverable:true
  }
  export default Card;