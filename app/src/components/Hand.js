import React, { Component } from 'react';

import Cards from '../Card';

const Card = new Cards();

class Hand extends Component {

  state = {
    bet: true,
    stack: 0,
    hand: [],
    player: 2,
    pot: 800
  }

  buyIn = () => {
    this.setState({stack: 1500, hand: [Card.generateCard(), Card.generateCard()]})
  }

  fold = () => {
    this.setState({hand: []})
  }

  render(){
    return(
      <React.Fragment>
        <h1 style={styles.player}>Player {this.state.player}</h1>
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
              <React.Fragment>
                <h1 style={styles.action} onClick={this.fold}>Fold</h1>
                <div style={styles.betActions}>
                  {
                    this.state.bet ? (
                      <React.Fragment>
                        <h1 style={styles.action}>Call</h1>
                        <h1 style={styles.action}>{this.state.pot / 2}</h1>
                        <h1 style={styles.action}>{this.state.pot}</h1>
                        <h1 style={styles.actionAllIn}>All In</h1>
                      </React.Fragment>
                    ) : <h1 style={styles.action}>Check</h1>
                  }
                </div>
              </React.Fragment>
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

export default Hand;
