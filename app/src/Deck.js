class Deck {
  constructor(){
    let cards = [];

    for(let v = 2; v < 15; v++){
      let card;
      for(let s = 1; s < 5; s++){
        if(v < 10){
          if(s === 1){card = v + 'C'; cards.push(card);}
          if(s === 2){card = v + 'H'; cards.push(card);}
          if(s === 3){card = v + 'D'; cards.push(card);}
          if(s === 4){card = v + 'S'; cards.push(card);}
        } else{
          switch (v) {
            case 10:
              if(s === 1){card = 'T' + 'C'; cards.push(card);}
              if(s === 2){card = 'T' + 'H'; cards.push(card);}
              if(s === 3){card = 'T' + 'D'; cards.push(card);}
              if(s === 4){card = 'T' + 'S'; cards.push(card);}
              break;
            case 11:
              if(s === 1){card = 'J' + 'C'; cards.push(card);}
              if(s === 2){card = 'J' + 'H'; cards.push(card);}
              if(s === 3){card = 'J' + 'D'; cards.push(card);}
              if(s === 4){card = 'J' + 'S'; cards.push(card);}
              break;
            case 12:
              if(s === 1){card = 'Q' + 'C'; cards.push(card);}
              if(s === 2){card = 'Q' + 'H'; cards.push(card);}
              if(s === 3){card = 'Q' + 'D'; cards.push(card);}
              if(s === 4){card = 'Q' + 'S'; cards.push(card);}
              break;
            case 13:
              if(s === 1){card = 'K' + 'C'; cards.push(card);}
              if(s === 2){card = 'K' + 'H'; cards.push(card);}
              if(s === 3){card = 'K' + 'D'; cards.push(card);}
              if(s === 4){card = 'K' + 'S'; cards.push(card);}
              break;
            case 14:
              if(s === 1){card = 'A' + 'C'; cards.push(card);}
              if(s === 2){card = 'A' + 'H'; cards.push(card);}
              if(s === 3){card = 'A' + 'D'; cards.push(card);}
              if(s === 4){card = 'A' + 'S'; cards.push(card);}
              break;
          }
        }
      }
    }

    console.log(cards)
  }
}

const DECK = new Deck();
