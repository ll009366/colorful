import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, useRef, useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Transition from '../Transition/Transition';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

let timer:any;

interface IMessageApi {
    warning(content: string, duration?: number): void;
    success(content: string, duration?: number): void;
    error(content: string, duration?: number): void;
}

const init=()=>{
    clearTimeout(timer)
    let dark_toast = document.getElementById('dark-toast');
    if (dark_toast) {
        dark_toast.style.display = "block"
    } else {
        let div = document.createElement("div")
        div.setAttribute("id", "dark-toast")
        document.body.appendChild(div);
    }
}




const MessageApi: IMessageApi = {
    warning(content: string, duration?: number) {
        init();
        const MessageInfo=(<span className='message-info message-item'><Icon icon='exclamation-circle' theme="warning" /><span className='text'>{content}</span></span>)
        ReactDOM.render(MessageInfo,document.querySelector('#dark-toast')); 
        timer=setTimeout(()=>{
            let dark_toast = document.getElementById('dark-toast')
            if (dark_toast) {
                dark_toast.style.display = "none"
            }    
        },duration)
    },

    success(content: string, duration?: number) {
        init();
        const MessageInfo=(<span className='message-info message-item'><Icon icon='calendar-check' theme="success" /><span className='text'>{content}</span></span>)
        ReactDOM.render(MessageInfo,document.querySelector('#dark-toast')); 
        timer=setTimeout(()=>{
            let dark_toast = document.getElementById('dark-toast')
            if (dark_toast) {
                dark_toast.style.display = "none"
            }    
        },duration)
    },
    error(content: string, duration?: number) {
        init();
        const MessageInfo=(<span className='message-info message-item'><Icon icon='calendar-times' theme="danger" /><span className='text'>{content}</span></span>)
        ReactDOM.render(MessageInfo,document.querySelector('#dark-toast')); 
        timer=setTimeout(()=>{
            let dark_toast = document.getElementById('dark-toast')
            if (dark_toast) {
                dark_toast.style.display = "none"
            }    
        },duration)
    }

}

export default MessageApi