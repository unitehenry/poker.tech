class Deck {

  constructor(){
    let cards = [];
  }

  generateDeck(){
    this.cards = [];

    for(let v = 2; v < 15; v++){
      let card;
      for(let s = 1; s < 5; s++){
        if(v < 10){
          if(s === 1){card = v + 'C'; this.cards.push(card);}
          if(s === 2){card = v + 'H'; this.cards.push(card);}
          if(s === 3){card = v + 'D'; this.cards.push(card);}
          if(s === 4){card = v + 'S'; this.cards.push(card);}
        } else{
          switch (v) {
            case 10:
              if(s === 1){card = 'T' + 'C'; this.cards.push(card);}
              if(s === 2){card = 'T' + 'H'; this.cards.push(card);}
              if(s === 3){card = 'T' + 'D'; this.cards.push(card);}
              if(s === 4){card = 'T' + 'S'; this.cards.push(card);}
              break;
            case 11:
              if(s === 1){card = 'J' + 'C'; this.cards.push(card);}
              if(s === 2){card = 'J' + 'H'; this.cards.push(card);}
              if(s === 3){card = 'J' + 'D'; this.cards.push(card);}
              if(s === 4){card = 'J' + 'S'; this.cards.push(card);}
              break;
            case 12:
              if(s === 1){card = 'Q' + 'C'; this.cards.push(card);}
              if(s === 2){card = 'Q' + 'H'; this.cards.push(card);}
              if(s === 3){card = 'Q' + 'D'; this.cards.push(card);}
              if(s === 4){card = 'Q' + 'S'; this.cards.push(card);}
              break;
            case 13:
              if(s === 1){card = 'K' + 'C'; this.cards.push(card);}
              if(s === 2){card = 'K' + 'H'; this.cards.push(card);}
              if(s === 3){card = 'K' + 'D'; this.cards.push(card);}
              if(s === 4){card = 'K' + 'S'; this.cards.push(card);}
              break;
            case 14:
              if(s === 1){card = 'A' + 'C'; this.cards.push(card);}
              if(s === 2){card = 'A' + 'H'; this.cards.push(card);}
              if(s === 3){card = 'A' + 'D'; this.cards.push(card);}
              if(s === 4){card = 'A' + 'S'; this.cards.push(card);}
              break;
          }
        }
      }
    }
  }
}

export default Deck;
