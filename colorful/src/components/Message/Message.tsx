import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, useRef, useState } from 'react';
import classNames from 'classnames';


interface BaseMessageProps {
    content?: string;
    title?: string;
    duration?: string | number;//自动关闭时间
}

const Message: FC<BaseMessageProps> = (props) => {
    const { content, title, duration } = props
    return (
        <div>我是提示框</div>
    )
}


interface IMessageApi {
    info(content: string, duration?: number): void;
}

const MessageApi: IMessageApi = {
    info() {
        alert('action');
        return Message
    }
}

Message.defaultProps = {
    duration: 4,
}

export default MessageApi