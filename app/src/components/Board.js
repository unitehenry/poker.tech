import React, { Component } from 'react';

class Board extends Component {

  render(){
    return (
      <h1 style={styles.header}>Poker.Tech</h1>
    )
  }

}

const styles = {
  header: {
    textAlign: 'center',
    fontSize: '5vw',
    marginTop: '5vh',
    color: '#FFAAEA',
    textShadow: '1px 1px #001514',
  }
}

export default Board;
