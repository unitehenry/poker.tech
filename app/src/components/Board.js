import React, { Component } from 'react';

import Cards from '../Card';

const Card = new Cards();

class Board extends Component {

  state = {
    board: {
      flop: [],
      turn: '',
      river: ''
    },
    pot: 1200,
    players: [
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 200, stack: 1300},
      {bet: 400, stack: 1100}
    ]
  }

  render(){
    return (
      <React.Fragment>
        <h1 style={styles.header}>Poker.Tech</h1>
        <div style={styles.board}>
         <img src={Card.getImage(Card.generateCard())} draggable="false" alt="card" style={styles.card}/>
         <img src={Card.getImage(Card.generateCard())} draggable="false" alt="card" style={styles.card}/>
         <img src={Card.getImage(Card.generateCard())} draggable="false" alt="card" style={styles.card}/>

         <img src={Card.getImage(Card.generateCard())} draggable="false" alt="card" style={styles.card}/>
         <img src={Card.getImage(Card.generateCard())} draggable="false" alt="card" style={styles.card}/>
        </div>

        <h1 style={styles.pot}>Pot: {this.state.pot}</h1>

        <div style={styles.players}>

          {
            this.state.players.map((player, index) => {
              if(player.bet > 0){
                return(
                  <div>
                    <h1 style={styles.bet}>Bet: {player.bet}</h1>
                    <h1 style={styles.player}>P{index + 1} - {player.stack}</h1>
                  </div>
                )
              } else {
                return(
                  <div>
                    <br/>
                    <h1 style={styles.player}>P{index + 1} - {player.stack}</h1>
                  </div>
                )
              }
            })
          }
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
