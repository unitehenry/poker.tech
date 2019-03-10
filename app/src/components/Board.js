import React, { Component } from 'react';

import Cards from '../Card';
import Decks from '../Deck';

import io from 'socket.io-client';

const Card = new Cards();
const Deck = new Decks();

const socket = io('http://localhost:8080/');

class Board extends Component {

  state = {
    start: false,
    board: {
      flop: [],
      turn: '',
      river: ''
    },
    pot: 0,
    players: [],
    deck: Deck,
    turnPlayer: 0,
    currentBet: 0,
    message: null
  }

  componentDidMount(){
    socket.emit('join game', this.props.id);

    socket.on('player join', (socketId) => {
      if(this.state.players.length < 8){
        let newPlayer = {id: this.state.players.length + 1, socketId: socketId, bet: 0, stack: 1500, hand: [], fold: false}
        let players = this.state.players;
        players.push(newPlayer);
        this.setState({players: players})
        socket.emit('update player', newPlayer)
      }
    })

    socket.on('player disconnect', (id) => {
      this.dropPlayer(id);
    })

    socket.on('fold', (id) => {
      let players = this.state.players;
      players[id-1].fold = true;
      this.setState({players: players})

      let nonfolders = [];
      players.forEach((player) => {
        if(!player.fold){nonfolders.push(player)}
      })

      if(nonfolders.length === 1){
        this.setState({message: `P${nonfolders[0].id} wins`})
      }

      if(nonfolders.length === 0){
        this.setState({message: null})
        this.dealHands();
      }
    })
  }

  dropPlayer = (id) => {
    let players = this.state.players;

    players.forEach((player, i) => {
      if(player.socketId === id){
        players.splice(i, 1)
      }
    })

    this.setState({players: players})

    this.state.players.forEach((player, i) => {
      socket.emit('update player', {id: i+1, socketId: player.socketId});
    })
  }

  startGame = () => {
    if(this.state.players.length > 1){
      this.setState({start: true})
      this.dealHands();
    }
  }

  dealHands = () => {
    this.state.deck.generateDeck();

    let players = this.state.players;

    players.forEach((player, i) => {
      players[i].hand = [this.state.deck.dealTop(), this.state.deck.dealTop()]
      socket.emit('update player', players[i])
    })

    this.setState({players: players})
  }

  dealBoard = () => {
    if(this.state.board.flop.length === 0){
      let flop = [this.state.deck.dealTop(), this.state.deck.dealTop(), this.state.deck.dealTop()]
      this.setState({board: {flop: flop, turn: '', river: ''}})
    } else if(this.state.board.turn === ''){
      this.setState({board: {flop: this.state.board.flop, turn: this.state.deck.dealTop(), river: ''}})
    } else if(this.state.board.river === '' && this.state.board.turn !== ''){
      this.setState({board: {flop: this.state.board.flop, turn: this.state.board.turn, river: this.state.deck.dealTop()}})
    } else {
      alert('winner is...')
    }
  }

  render(){
    return (
      <React.Fragment>
        <h1 style={styles.header}>Poker.Tech</h1>
          {
            this.state.start ? (
              <div style={styles.board}>
                <React.Fragment>
                  {this.state.board.flop[0] ? <img src={Card.getImage(this.state.board.flop[0])} draggable="false" alt="card" style={styles.card}/> : null}
                  {this.state.board.flop[1] ? <img src={Card.getImage(this.state.board.flop[1])} draggable="false" alt="card" style={styles.card}/> : null}
                  {this.state.board.flop[2] ? <img src={Card.getImage(this.state.board.flop[2])} draggable="false" alt="card" style={styles.card}/> : null}
                </React.Fragment>
               {this.state.board.turn !== '' ? <img src={Card.getImage(this.state.board.turn)} draggable="false" alt="card" style={styles.card}/> : null}
               {this.state.board.river !== '' ? <img src={Card.getImage(this.state.board.river)} draggable="false" alt="card" style={styles.card}/> : null}
              </div>
            ) : null
          }
          { this.state.message ? <h1 style={styles.message}>{this.state.message}</h1> : null }
          {
          !this.state.start ? <p style={styles.button} onClick={this.startGame}>Start Game</p> :
          <p style={styles.button} onClick={this.dealBoard}>
            {
              this.state.board.flop.length !== 0 && this.state.board.turn !== '' && this.state.board.river !== '' ?
              'Reveal Winner' : 'Deal'
            }
          </p>
        }


        <div style={styles.players}>

          {
            this.state.players.map((player, index) => {
              return <h1 key={index} style={styles.player}>P{index+1}</h1>
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
    margin: '0 auto',
    paddingBottom: '10vh'
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
    color: '#001514',
    margin: '0 auto'
  },
  message: {
    textAlign: 'center'
  },
  dealButton: {
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

export default Board;

//{ this.state.pot === 0 ? null && !this.state.start : <h1 style={styles.pot}>Pot: {this.state.pot}</h1>}
