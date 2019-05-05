import React from 'react';
import './App.css';
import Main from './route';
import Header from './Components/Header';

const App = () => {
  return (
    <div className="Dashboard">
      <Header />
      <Main />
    </div>
  )
}

export default App;
