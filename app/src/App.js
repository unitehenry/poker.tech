import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from './components/Landing';
import Board from './components/Board';
import Hand from './components/Hand';

import './App.css';

class App extends Component {

  state = {
    player: null,
    dealer: false,
    id: ''
  }

  isPlayer = (isPlayer) => {
    this.setState({player: isPlayer})
    if(isPlayer === false){
      this.setState({dealer: true})
    }
  }

  setId = (id) => {
    this.setState({id: id})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/:id" render={(props) => this.state.player === null ? <Landing {...props} dealer={this.state.dealer} isPlayer={this.isPlayer} setId={this.setId} id={this.state.id}/> : null}/>
        </Router>
        { this.state.player === false ? <Board id={this.state.id}/> : null}
        { this.state.player ? <Hand id={this.state.id}/> : null }
      </div>
    );
  }
}

export default App;
