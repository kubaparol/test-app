import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='App-button App-button--alert' onClick={alertHandler}>Click here!</button>
        <button className='App-button App-button--repo'><a className='button-link' href="https://github.com/kubaparol/test-app" target="_blank">Click to see my repo</a></button>
      </header>
    </div>
  );
}

function alertHandler() {
  alert('Hello React!')
}

export default App;
