import React, { Component } from 'react';

class Landing extends Component{

  render(){
    return(
      <div>
        <p style={styles.header}>Poker.Tech</p>
        <div style={styles.buttons}>
          <p style={styles.button}>Dealer</p>
          <p style={styles.button}>Player</p>
        </div>
      </div>
    )
  }

}

const styles = {
  header: {
    textAlign: 'center',
    fontSize: '10vw',
    marginTop: '25vh',
    color: '#FFAAEA',
    textShadow: '1px 1px #001514'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#FFAAEA',
    textAlign: 'center',
    border: '1px solid #001514',
    padding: '15px',
    width: '7em',
    fontSize: '2em',
    userSelect: 'none',
    cursor: 'pointer',
    color: '#001514'
  }
}

export default Landing;
