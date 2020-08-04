import React from 'react';
import './App.css';
import AddList from './component/AddList'
import ListTable from './component/ListTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddList />
        <ListTable />
      </header>
    </div>
  );
}

export default App;
