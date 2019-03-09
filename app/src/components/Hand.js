import React, { Component } from 'react';

import TwoClubs from '../assets/cards/2C.jpg';

class Hand extends Component {

  state = {
    bet: true
  }

  render(){
    return(
      <React.Fragment>
        <h1 style={styles.player}>Player One</h1>
        <div style={styles.hand}>
          <img src={TwoClubs} style={styles.card}/>
          <img src={TwoClubs} style={styles.card}/>
        </div>
        <div style={styles.betting}>
          <h1 style={styles.action}>Fold</h1>
          <div style={styles.betActions}>
            {
              this.state.bet ? (
                <React.Fragment>
                  <h1 style={styles.action}>100</h1>
                  <h1 style={styles.action}>200</h1>
                  <h1 style={styles.action}>All In</h1>
                </React.Fragment>
              ) : <h1 style={styles.action}>Check</h1>
            }

          </div>
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
  }
}

export default Hand;
