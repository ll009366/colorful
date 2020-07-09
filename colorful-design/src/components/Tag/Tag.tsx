import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames';

export interface TagProps {
    className?: string;
    style?: CSSProperties;

  }

export const Tag: FC<TagProps> = (props) => {
    const {className,style, children }=props;


    return (
      <div style={style}>
          
      </div>
    )
  }
  
  Tag.defaultProps = {

  }
  export default Tag;