import React, { Component } from 'react';

import Landing from './components/Landing';
import Board from './components/Board';
import Hand from './components/Hand';

import './App.css';

import io from 'socket.io-client';
const socket = io('http://localhost:8080/');

class App extends Component {

  state = {
    player: null,
    dealer: false
  }

  isPlayer = (isPlayer) => {
    this.setState({player: isPlayer})
    if(isPlayer === false){
      this.setState({dealer: true})
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.player === null ? <Landing dealer={this.state.dealer} isPlayer={this.isPlayer} /> : null }
        { this.state.player === false ? <Board /> : null}
        { this.state.player ? <Hand /> : null }
      </div>
    );
  }
}

export default App;
