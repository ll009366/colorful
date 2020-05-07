import React from 'react';
import Button from './components/Button/Button';
import Message from './components/Message/Message';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import Submenu from './components/Menu/Submenu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/Icon';
import Alert from './components/Alert/Alert';
import Tabs from './components/Tabs';
var TabItem = Tabs.Item;
library.add(fas);
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Icon, { icon: 'calendar-check', theme: "danger", size: '10x' }),
        React.createElement("header", { className: "App-header" },
            React.createElement(Button, { btnType: "default", className: "dadas", autoFocus: true, onMouseDown: function () {
                    console.log('sds');
                } }, "Default"),
            React.createElement(Button, { btnType: "primary" }, "Primary"),
            React.createElement(Button, { btnType: "link", href: "www", target: "_blank" }, "Link"),
            React.createElement(Button, { btnType: "danger", size: "lg" }, "Danger"),
            React.createElement(Button, { disabled: true }, "Danger"),
            React.createElement("div", null,
                React.createElement(Button, { btnType: "primary", onClick: function () {
                        Message.warning('张乐', 1);
                    } }, "Primary")),
            React.createElement("div", { style: { margin: '40px' } },
                React.createElement(Menu, { onSelect: function (index) {
                        console.log(index);
                    } },
                    React.createElement(MenuItem, null, "\u9996\u9875"),
                    React.createElement(MenuItem, null, "\u5217\u8868"),
                    React.createElement(MenuItem, null, "\u4E2A\u4EBA"),
                    React.createElement(Submenu, { title: '侧边' },
                        React.createElement(MenuItem, null, "\u4E2A\u4EBA\u4E3B\u9875"),
                        React.createElement(MenuItem, null, "\u5B9E\u4F8B\u70B9\u51FB")))),
            React.createElement("div", { style: { margin: '40px' } },
                React.createElement(Menu, { onSelect: function (index) {
                        console.log(index);
                    }, mode: 'vertical', defaultOpenSubMenus: ['3'] },
                    React.createElement(MenuItem, { index: '0' }, "\u9996\u9875"),
                    React.createElement(MenuItem, { index: '1' }, "\u5217\u8868"),
                    React.createElement(MenuItem, { index: '2' }, "\u4E2A\u4EBA"),
                    React.createElement(Submenu, { title: '侧边' },
                        React.createElement(MenuItem, null, "\u4E2A\u4EBA\u4E3B\u9875"),
                        React.createElement(MenuItem, null, "\u5B9E\u4F8B\u70B9\u51FB")))),
            React.createElement("div", null,
                React.createElement(Button, { size: "lg", onClick: function () { Message.warning('测试warning', 8000); }, btnType: 'primary' }, "warning"),
                React.createElement(Button, { btnType: "primary", size: "lg", onClick: function () { Message.success('测试success', 8000); } }, "success"),
                React.createElement(Button, { btnType: "danger", size: "lg", onClick: function () { Message.error('测试error', 8000); } }, "error")),
            React.createElement("div", null,
                React.createElement(Alert, { title: "this is Success", type: "success" })),
            React.createElement("div", null,
                React.createElement(Tabs, null,
                    React.createElement(TabItem, { label: "tab1" }, "content1"),
                    React.createElement(TabItem, { label: "tab2" }, "content2"),
                    React.createElement(TabItem, { label: "disabled", disabled: true }, "content3"))))));
}
export default App;
