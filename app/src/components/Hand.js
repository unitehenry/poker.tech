import React, { Component } from 'react';

import TwoClubs from '../assets/cards/2C.jpg';

class Hand extends Component {

  render(){
    return(
      <React.Fragment>
        <h1 style={styles.player}>Player One</h1>
        <div style={styles.hand}>
          <img src={TwoClubs} style={styles.card}/>
          <img src={TwoClubs} style={styles.card}/>
        </div>
        <div style={styles.betting}>
          <h1>Fold</h1>
          <h1>Bet</h1>
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
  }
}

export default Hand;
