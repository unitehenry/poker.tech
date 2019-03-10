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
    pot: 0,
    players: [
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500},
      {bet: 0, stack: 1500}
    ]
  }

  render(){
    return (
      <React.Fragment>
        <h1 style={styles.header}>Poker.Tech</h1>
        <div style={styles.board}>
          {
            this.state.board.flop.length !== 0 ?
            (
              <React.Fragment>
                <img src={Card.getImage(this.state.board.flop[0])} draggable="false" alt="card" style={styles.card}/>
                <img src={Card.getImage(this.state.board.flop[1])} draggable="false" alt="card" style={styles.card}/>
                <img src={Card.getImage(this.state.board.flop[2])} draggable="false" alt="card" style={styles.card}/>
              </React.Fragment>
            ) : null
          }
         {this.state.board.turn ? <img src={Card.getImage(this.state.board.turn)} draggable="false" alt="card" style={styles.card}/> : null}
         {this.state.board.river ? <img src={Card.getImage(this.state.board.river)} draggable="false" alt="card" style={styles.card}/> : null}
        </div>

        { this.state.pot === 0 ? null : <h1 style={styles.pot}>Pot: {this.state.pot}</h1>}

        <div style={styles.players}>

          {
            this.state.players.map((player, index) => {
              if(player.bet > 0){
                return(
                  <div key={index}>
                    <h1 style={styles.bet}>Bet: {player.bet}</h1>
                    <h1 style={styles.player}>P{index + 1} - {player.stack}</h1>
                  </div>
                )
              } else {
                return(
                  <div key={index}>
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
