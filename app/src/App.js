import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from './components/Landing';
import Board from './components/Board';
import Hand from './components/Hand';

import './App.css';

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
        <Router>
          <Route path="/:id" render={(props) => this.state.player === null ? <Landing {...props} dealer={this.state.dealer} isPlayer={this.isPlayer} /> : null}/>
        </Router>
        { this.state.player === false ? <Board /> : null}
        { this.state.player ? <Hand /> : null }
      </div>
    );
  }
}

export default App;
