import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { Component } from 'react';
import AccountsDashboard from './AccountsDashboard';
import pcf from './pcf.png';
import snyk from './snyk.jpg';
import './App.css';
import config from './config';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <a href={config.SNYK_DASHBOARD_URL} target="_blank"><img src={snyk} className="Snyk-logo" alt="logo" /></a>
            <h1 className="display-4">Fake Bank</h1>
        </header>

           <AccountsDashboard/>
          <footer>
              <a href={config.PCF_APPS_MGR_URL} target="_blank"><img src={pcf} className="PCF-logo" alt="logo" /></a>
          </footer>
      </div>

    );
  }
}

export default App;
