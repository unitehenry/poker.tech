class Deck {

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
              if(s === 1){card = 'TC'; this.cards.push(card);}
              if(s === 2){card = 'TH'; this.cards.push(card);}
              if(s === 3){card = 'TD'; this.cards.push(card);}
              if(s === 4){card = 'TS'; this.cards.push(card);}
              break;
            case 11:
              if(s === 1){card = 'JC'; this.cards.push(card);}
              if(s === 2){card = 'JH'; this.cards.push(card);}
              if(s === 3){card = 'JD'; this.cards.push(card);}
              if(s === 4){card = 'JS'; this.cards.push(card);}
              break;
            case 12:
              if(s === 1){card = 'QC'; this.cards.push(card);}
              if(s === 2){card = 'QH'; this.cards.push(card);}
              if(s === 3){card = 'QD'; this.cards.push(card);}
              if(s === 4){card = 'QS'; this.cards.push(card);}
              break;
            case 13:
              if(s === 1){card = 'KC'; this.cards.push(card);}
              if(s === 2){card = 'KH'; this.cards.push(card);}
              if(s === 3){card = 'KD'; this.cards.push(card);}
              if(s === 4){card = 'KS'; this.cards.push(card);}
              break;
            case 14:
              if(s === 1){card = 'AC'; this.cards.push(card);}
              if(s === 2){card = 'AH'; this.cards.push(card);}
              if(s === 3){card = 'AD'; this.cards.push(card);}
              if(s === 4){card = 'AS'; this.cards.push(card);}
              break;
            default:
              break;
          }
        }
      }
    }
  }

  dealTop(){
    return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0];
  }
}

export default Deck;
