import React, { Component } from 'react';
import Comp from './components'
import logo from './static/react.svg'
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Comp />
      </div>
    );
  }
}

export default App;
