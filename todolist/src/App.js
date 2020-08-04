import React from 'react';
import './App.css';
import AllListPage from './component/AllListPage'
import FinishedListPage from './component/FinishedListTable'
import { HashRouter, Route } from 'react-router-dom'
import Menu from './component/Menu'
import AxiosPage from './component/AxiosPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Menu />
          <div>
            <Route exact path='/' component={AllListPage} />
            <Route path='/axios' component={AxiosPage} />
            <Route path='/finished' component={FinishedListPage} />
          </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
