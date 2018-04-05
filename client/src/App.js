import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

import Examples from './components/Examples/Examples.js';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      <MuiThemeProvider>
        <AppBar
          title="Example"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <p className="App-intro">
        </p>
        <Examples/>
      </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
