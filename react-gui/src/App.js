import React, { Component } from 'react';
import SignOn from './SignOn';
import logo from './gnb-logo.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SpringOne Platform 2018!</h1>
        </header>
           <SignOn/>
      </div>
    );
  }
}

export default App;
