import React, { Component } from 'react';

import Cards from '../Card';

import io from 'socket.io-client';

const Card = new Cards();

const socket = io('http://localhost:8080/');

class Hand extends Component {

  state = {
    socketId: '',
    bet: 0,
    stack: 0,
    hand: [],
    id: null,
    pot: 0,
    turn: false,
    currentBet: 0
  }

  buyIn = () => {
    socket.emit('player join', this.props.id)
  }

  fold = () => {
    this.setState({hand: []})
    socket.emit('fold', {id: this.state.id, game: this.props.id})
  }

  componentDidMount() {
    socket.emit('join game', this.props.id);

    socket.on('player update', (player) => {
      this.setState(player)
    })
  }

  render(){
    return(
      <React.Fragment>
        <h1 style={styles.player}>Player {this.state.id}</h1>
        <div style={styles.hand}>
          {
            this.state.hand.length > 0 ? (
              <React.Fragment>
                <img src={Card.getImage(this.state.hand[0])} draggable="false" alt="card" style={styles.card}/>
                <img src={Card.getImage(this.state.hand[1])} draggable="false" alt="card" style={styles.card}/>
              </React.Fragment>
            ) : null
          }

        </div>
        <div style={styles.betting}>
          {
            this.state.stack !== 0 ? (
              this.state.hand.length > 0 ? (
                <React.Fragment>
                  <h1 style={styles.action} onClick={this.fold}>Fold</h1>
                </React.Fragment>
              ) : null
            ) : <h1 style={styles.action} onClick={this.buyIn}>Buy In</h1>
          }
        </div>
      </React.Fragment>
    )
  }
}

const styles = {
  player: {
    fontSize: '5vw',
    textAlign: 'center'
  },
  hand: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    height: '10em',
    width: '7.5em',
    borderRadius: '10px',
    border: '2px solid #001514',
    margin: '1em'
  },
  betting: {
    display: 'flex',
    bottom: 0,
    position: 'absolute',
    width: '100vw'
  },
  betActions: {
    display: 'flex',
    flexGrow: 1
  },
  action: {
    flexGrow: 1,
    backgroundColor: '#134611',
    textAlign: 'center',
    margin: 0,
    padding: '5vh',
    cursor: 'pointer'
  },
  actionAllIn: {
    flexGrow: 1,
    backgroundColor: 'red',
    textAlign: 'center',
    margin: 0,
    padding: '5vh',
    cursor: 'pointer'
  }
}

/*
<div style={styles.betActions}>
  <React.Fragment>
    {this.state.bet < this.state.currentBet ? <h1 style={styles.action} onClick={() => this.makeBet(this.state.currentBet)}>Call</h1> : null}
    <h1 style={styles.action} onClick={() => {this.state.pot / 2 === 0 ? this.makeBet(100) : this.makeBet(this.state.pot / 2)}}>{this.state.pot / 2 === 0 ? '100' : this.state.pot / 2}</h1>
    <h1 style={styles.action} onClick={() => {this.state.pot === 0 ? this.makeBet(200) : this.makeBet(this.state.pot)}}>{this.state.pot === 0 ? '200' : this.state.pot}</h1>
    {this.state.bet === this.state.currentBet ? <h1 style={styles.action} onClick={() => this.makeBet('check')}>Check</h1> : null}
    <h1 style={styles.actionAllIn} onClick={() => this.makeBet(this.state.stack)}>All In</h1>
  </React.Fragment>
</div>
*/

export default Hand;
