import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/Title/Title';
import Table from './component/Table/Table';
import Options from './component/Options/Options'

function App() {
  return (
    <div className="App">
      <Title />
      <Table />
      <Options />
    </div>
  );
}

export default App;
