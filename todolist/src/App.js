import React from 'react';
import './App.css';
import AllListPage from './component/AllListPage'
import FinishedListPage from './component/FinishedListTable'
import { HashRouter, Route } from 'react-router-dom'
import RouterMenu from './component/RouterMenu'
import AxiosPage from './component/AxiosPage'
import 'antd/dist/antd.css'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HashRouter>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <RouterMenu />

          </Header>

          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              <Route exact path='/' component={AllListPage} />
              <Route path='/axios' component={AxiosPage} />
              <Route path='/finished' component={FinishedListPage} />
            </div>
          </Content>
        </HashRouter>
        <Footer style={{ textAlign: 'center' }}>©2020 Created by Jim&Jay</Footer>
      </Layout>
    </div>
  );
}

export default App;
