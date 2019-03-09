import React, { Component } from 'react';

import Landing from './components/Landing';
import Board from './components/Board';
import Hand from './components/Hand';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hand />
      </div>
    );
  }
}

export default App;
