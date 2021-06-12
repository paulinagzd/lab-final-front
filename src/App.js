import Demo from './components/login'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import { routes } from './routeConstants'
import UserTable from './components/UsersDashboard/UserTable';
import login from './components/login'

import 'antd/dist/antd.css'; 
import './App.css';
import React from 'react';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout; 


function App() {
    
  return (
    <div>
      <BrowserRouter>
        <Switch>
              <Route path="/login" component={login}/>
              <Route path="/users" component={UserTable}/>
              <Redirect to="/login"/>
        </Switch>
      </BrowserRouter>
    </div>
    // <React.Fragment>
    //   <div className="App">
    //       <Layout>
    //       <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} >header</Header>

    //         <Sider style={{height: '100%'}}>left sidebar</Sider>
    //         <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, height: '100%'}}>
    //           <Demo/>
    //         </Content>
    //         <Sider>right sidebar</Sider>
    //         <Footer>footer</Footer>

    //       </Layout>
    //   </div>
    //   <>
    //       <UserDetail />
    //   </>
    // </React.Fragment>
    



    //   <Layout>
    //   <Header className="header">
    //     <div className="logo" />
    //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    //       <Menu.Item key="1">nav 1</Menu.Item>
    //       <Menu.Item key="2">nav 2</Menu.Item>
    //       <Menu.Item key="3">nav 3</Menu.Item>
    //     </Menu>
    //   </Header>
    //   <Content style={{ padding: '0 50px' }}>
    //     <Breadcrumb style={{ margin: '16px 0' }}>
    //       <Breadcrumb.Item>Home</Breadcrumb.Item>
    //       <Breadcrumb.Item>List</Breadcrumb.Item>
    //       <Breadcrumb.Item>App</Breadcrumb.Item>
    //     </Breadcrumb>
    //     <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
    //       <Sider className="site-layout-background" width={200}>
    //         <Menu
    //           mode="inline"
    //           defaultSelectedKeys={['1']}
    //           defaultOpenKeys={['sub1']}
    //           style={{ height: '100%' }}
    //         >
    //           <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
    //             <Menu.Item key="1">option1</Menu.Item>
    //             <Menu.Item key="2">option2</Menu.Item>
    //             <Menu.Item key="3">option3</Menu.Item>
    //             <Menu.Item key="4">option4</Menu.Item>
    //           </SubMenu>
    //           <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
    //             <Menu.Item key="5">option5</Menu.Item>
    //             <Menu.Item key="6">option6</Menu.Item>
    //             <Menu.Item key="7">option7</Menu.Item>
    //             <Menu.Item key="8">option8</Menu.Item>
    //           </SubMenu>
    //           <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
    //             <Menu.Item key="9">option9</Menu.Item>
    //             <Menu.Item key="10">option10</Menu.Item>
    //             <Menu.Item key="11">option11</Menu.Item>
    //             <Menu.Item key="12">option12</Menu.Item>
    //           </SubMenu>
    //         </Menu>
    //       </Sider>
    //       <Content style={{ padding: '0 24px', minHeight: 280 }}><Demo/></Content>
    //     </Layout>
    //   </Content>
    //   <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    // </Layout>
  );
}

export default App;
