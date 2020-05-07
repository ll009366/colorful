import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon/Icon';
var timer;
var init = function () {
    clearTimeout(timer);
    var dark_toast = document.getElementById('dark-toast');
    if (dark_toast) {
        dark_toast.style.display = "block";
    }
    else {
        var div = document.createElement("div");
        div.setAttribute("id", "dark-toast");
        document.body.appendChild(div);
    }
};
var MessageApi = {
    warning: function (content, duration) {
        init();
        var MessageInfo = (React.createElement("span", { className: 'message-info message-item' },
            React.createElement(Icon, { icon: 'exclamation-circle', theme: "warning" }),
            React.createElement("span", { className: 'text' }, content)));
        ReactDOM.render(MessageInfo, document.querySelector('#dark-toast'));
        timer = setTimeout(function () {
            var dark_toast = document.getElementById('dark-toast');
            if (dark_toast) {
                dark_toast.style.display = "none";
            }
        }, duration);
    },
    success: function (content, duration) {
        init();
        var MessageInfo = (React.createElement("span", { className: 'message-info message-item' },
            React.createElement(Icon, { icon: 'calendar-check', theme: "success" }),
            React.createElement("span", { className: 'text' }, content)));
        ReactDOM.render(MessageInfo, document.querySelector('#dark-toast'));
        timer = setTimeout(function () {
            var dark_toast = document.getElementById('dark-toast');
            if (dark_toast) {
                dark_toast.style.display = "none";
            }
        }, duration);
    },
    error: function (content, duration) {
        init();
        var MessageInfo = (React.createElement("span", { className: 'message-info message-item' },
            React.createElement(Icon, { icon: 'calendar-times', theme: "danger" }),
            React.createElement("span", { className: 'text' }, content)));
        ReactDOM.render(MessageInfo, document.querySelector('#dark-toast'));
        timer = setTimeout(function () {
            var dark_toast = document.getElementById('dark-toast');
            if (dark_toast) {
                dark_toast.style.display = "none";
            }
        }, duration);
    }
};
export default MessageApi;
