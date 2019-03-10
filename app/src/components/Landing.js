import React, { Component } from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:8080/');

class Landing extends Component{

  setDealer = () => {
    this.setState({dealer: true})
    this.props.isPlayer(false)
  }

  componentDidMount(){
    socket.emit('join game', this.props.match.params.id)
  }

  render(){
    return(
      <div>
        <p style={styles.header}>Poker.Tech</p>
        <div style={styles.buttons}>
          { this.props.dealer ? null : <p style={styles.button} onClick={this.setDealer}>Dealer</p>}
          <p style={styles.button} onClick={() => this.props.isPlayer(true)}>{this.props.dealer ? 'Join' : 'Player'}</p>
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
    color: '#D0F1BF',
    textShadow: '1px 1px #001514'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#D0F1BF',
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
