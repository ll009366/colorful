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
import Card from './components/Card'

const TabItem = Tabs.Item
library.add(fas);



function App() {
  return (
    <div className="App">
      <Icon icon='calendar-check' theme="danger" size='10x' />
      <header className="App-header">
        <Button
          btnType="default"
          className="dadas"
          autoFocus
          onMouseDown={() => {
            console.log('sds');
          }}
        >
          Default
        </Button>
        <Button btnType="primary">Primary</Button>
        <Button btnType="link" href="www" target="_blank">
          Link
        </Button>
        <Button btnType="danger" size="lg">
          Danger
        </Button>

        <Button disabled>Danger</Button>
        <div>
          <Button
            btnType="primary"
            onClick={() => {
              Message.warning('张乐', 1);
            }}
          >
            Primary
          </Button>
        </div>
        <div style={{ margin: '40px' }}>
          <Menu
            onSelect={(index) => {
              console.log(index);
            }}
          >
            <MenuItem>首页</MenuItem>
            <MenuItem>列表</MenuItem>
            <MenuItem>个人</MenuItem>
            <Submenu title={'侧边'}>
              <MenuItem>个人主页</MenuItem>
              <MenuItem>实例点击</MenuItem>
            </Submenu>
          </Menu>
        </div>

        <div style={{ margin: '40px' }}>
          <Menu
            onSelect={(index) => {
              console.log(index);
            }}
            mode={'vertical'}
            defaultOpenSubMenus={['3']}
          >
            <MenuItem index={'0'}>首页</MenuItem>
            <MenuItem index={'1'}>列表</MenuItem>
            <MenuItem index={'2'}>个人</MenuItem>
            <Submenu title={'侧边'}>
              <MenuItem>个人主页</MenuItem>
              <MenuItem>实例点击</MenuItem>
            </Submenu>
          </Menu>
        </div>

        <div>


          <Button size="lg" onClick={()=>{ Message.warning('测试warning',8000)}} btnType='primary'>
            warning
          </Button>
          <Button btnType="primary" size="lg" onClick={()=>{ Message.success('测试success',8000)}}>
            success
          </Button>
          <Button btnType="danger" size="lg" onClick={()=>{ Message.error('测试error',8000)}}>
            error
          </Button>
        </div>
        <div>
        <Alert title="this is Success" type="success"></Alert>
        </div>
        <div>
        <Tabs>
        <TabItem label="tab1">content1</TabItem>
        <TabItem label="tab2">content2</TabItem>
        <TabItem label="disabled" disabled>content3</TabItem>
      </Tabs>

            <Card title='我是你的爸爸' style={{width:'300px'}} hoverable>
                <div>我是张乐我是张乐我是张乐我是张乐我是张乐我是张乐</div>
            </Card>

        </div>
      </header>
    </div>
  );
}

export default App;
