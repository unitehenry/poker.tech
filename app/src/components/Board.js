import React, { Component } from 'react';

import TwoClubs from '../assets/cards/2C.jpg';

class Board extends Component {

  render(){
    return (
      <React.Fragment>
        <h1 style={styles.header}>Poker.Tech</h1>
        <div style={styles.board}>
          <img src={TwoClubs} draggable="false" alt="card" style={styles.card}/>
          <img src={TwoClubs} draggable="false" alt="card" style={styles.card}/>
          <img src={TwoClubs} draggable="false" alt="card" style={styles.card}/>

          <img src={TwoClubs} draggable="false" alt="card" style={styles.card}/>
          <img src={TwoClubs} draggable="false" alt="card" style={styles.card}/>
        </div>

        <h1 style={styles.pot}>Pot: 500</h1>

        <div style={styles.players}>
          <div>
            <h1 style={styles.bet}>Bet: 150</h1>
            <h1 style={styles.player}>P1 - 1500</h1>
          </div>
          <div>
            <h1 style={styles.bet}>Bet: 150</h1>
            <h1 style={styles.player}>P2 - 1500</h1>
          </div><div>
            <h1 style={styles.bet}>Bet: 150</h1>
            <h1 style={styles.player}>P3 - 1500</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const styles = {
  header: {
    textAlign: 'center',
    fontSize: '5vw',
    marginTop: '5vh',
    color: '#F3EFF5',
    textShadow: '1px 1px #001514',
  },
  board: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '50vw',
    margin: '0 auto'
  },
  card: {
    height: '10em',
    width: '7.5em',
    borderRadius: '10px',
    border: '2px solid #001514'
  },
  players: {
    display: 'flex',
    justifyContent: 'space-around',
    bottom: 0,
    position: 'absolute',
    width: '100vw'
  },
  player: {
    textAlign: 'center'
  },
  bet: {
    textAlign: 'center'
  },
  pot: {
    textAlign: 'center',
    fontSize: '5vw'
  }
}

export default Board;
