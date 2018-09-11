import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { Component } from 'react';
import SignOn from './SignOn';
import pcf from './pcf.png';
import snyk from './snyk.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <a href="https://app.snyk.io/org/pivotal-demo/" target="_blank"><img src={snyk} className="Snyk-logo" alt="logo" /></a>
            <h1 className="display-4">Fake Bank</h1>
        </header>

           <SignOn/>
          <footer>
              <a href="https://console.run.pivotal.io/" target="_blank"><img src={pcf} className="PCF-logo" alt="logo" /></a>
          </footer>
      </div>

    );
  }
}

export default App;
