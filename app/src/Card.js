import TwoClubs from './assets/cards/2C.jpg';
import TwoDiamonds from './assets/cards/2D.jpg';
import TwoHearts from './assets/cards/2H.jpg';
import TwoSpades from './assets/cards/2S.jpg';
import ThreeClubs from './assets/cards/3C.jpg';
import ThreeDiamonds from './assets/cards/3D.jpg';
import ThreeHearts from './assets/cards/3H.jpg';
import ThreeSpades from './assets/cards/3S.jpg';
import FourClubs from './assets/cards/4C.jpg';
import FourDiamonds from './assets/cards/4D.jpg';
import FourHearts from './assets/cards/4H.jpg';
import FourSpades from './assets/cards/4S.jpg';
import FiveClubs from './assets/cards/5C.jpg';
import FiveDiamonds from './assets/cards/5D.jpg';
import FiveHearts from './assets/cards/5H.jpg';
import FiveSpades from './assets/cards/5S.jpg';
import SixClubs from './assets/cards/6C.jpg';
import SixDiamonds from './assets/cards/6D.jpg';
import SixHearts from './assets/cards/6H.jpg';
import SixSpades from './assets/cards/6S.jpg';
import SevenClubs from './assets/cards/7C.jpg';
import SevenDiamonds from './assets/cards/7D.jpg';
import SevenHearts from './assets/cards/7H.jpg';
import SevenSpades from './assets/cards/7S.jpg';
import EightClubs from './assets/cards/8C.jpg';
import EightDiamonds from './assets/cards/8D.jpg';
import EightHearts from './assets/cards/8H.jpg';
import EightSpades from './assets/cards/8S.jpg';
import NineClubs from './assets/cards/9C.jpg';
import NineDiamonds from './assets/cards/9D.jpg';
import NineHearts from './assets/cards/9H.jpg';
import NineSpades from './assets/cards/9S.jpg';
import TenClubs from './assets/cards/TC.jpg';
import TenDiamonds from './assets/cards/TD.jpg';
import TenHearts from './assets/cards/TH.jpg';
import TenSpades from './assets/cards/TS.jpg';
import JackClubs from './assets/cards/JC.jpg';
import JackDiamonds from './assets/cards/JD.jpg';
import JackHearts from './assets/cards/JH.jpg';
import JackSpades from './assets/cards/JS.jpg';
import QueenClubs from './assets/cards/QC.jpg';
import QueenDiamonds from './assets/cards/QD.jpg';
import QueenHearts from './assets/cards/QH.jpg';
import QueenSpades from './assets/cards/QS.jpg';
import KingClubs from './assets/cards/KC.jpg';
import KingDiamonds from './assets/cards/KD.jpg';
import KingHearts from './assets/cards/KH.jpg';
import KingSpades from './assets/cards/KS.jpg';
import AceClubs from './assets/cards/AC.jpg';
import AceDiamonds from './assets/cards/AD.jpg';
import AceHearts from './assets/cards/AH.jpg';
import AceSpades from './assets/cards/AS.jpg';

class Card {
  getImage = (card) => {
    switch (card) {
      case '2C':
        return TwoClubs;
        break;
      case '2D':
        return TwoDiamonds;
        break;
      case '2H':
        return TwoHearts;
        break;
      case '2S':
        return TwoSpades;
        break;
      case '3C':
        return ThreeClubs;
        break;
      case '3D':
        return ThreeDiamonds;
        break;
      case '3H':
        return ThreeHearts;
        break;
      case '3S':
        return ThreeSpades;
        break;
      case '4C':
        return FourClubs;
        break;
      case '4D':
        return FourDiamonds;
        break;
      case '4H':
        return FourHearts;
        break;
      case '4S':
        return FourSpades;
        break;
      case '5C':
        return FiveClubs;
        break;
      case '5D':
        return FiveDiamonds;
        break;
      case '5H':
        return FiveHearts;
        break;
      case '5S':
        return FiveSpades;
        break;
      case '6C':
        return SixClubs;
        break;
      case '6D':
        return SixDiamonds;
        break;
      case '6H':
        return SixHearts;
        break;
      case '6S':
        return SixSpades;
        break;
      case '7C':
        return SevenClubs;
        break;
      case '7D':
        return SevenDiamonds;
        break;
      case '7H':
        return SevenHearts;
        break;
      case '7S':
        return SevenSpades;
        break;
      case '8C':
        return EightClubs;
        break;
      case '8D':
        return EightDiamonds;
        break;
      case '8H':
        return EightHearts;
        break;
      case '8S':
        return EightSpades;
        break;
      case '9C':
        return NineClubs;
        break;
      case '9D':
        return NineDiamonds;
        break;
      case '9H':
        return NineHearts;
        break;
      case '9S':
        return NineSpades;
        break;
      case 'TC':
        return TenClubs;
        break;
      case 'TD':
        return TenDiamonds;
        break;
      case 'TH':
        return TenHearts;
        break;
      case 'TS':
        return TenSpades;
        break;
      case 'JC':
        return JackClubs;
        break;
      case 'JD':
        return JackDiamonds;
        break;
      case 'JH':
        return JackHearts;
        break;
      case 'JS':
        return JackSpades;
        break;
      case 'QC':
        return QueenClubs;
        break;
      case 'QD':
        return QueenDiamonds;
        break;
      case 'QH':
        return QueenHearts;
        break;
      case 'QS':
        return QueenSpades;
        break;
      case 'KC':
        return KingClubs;
        break;
      case 'KD':
        return KingDiamonds;
        break;
      case 'KH':
        return KingHearts;
        break;
      case 'KS':
        return KingSpades;
        break;
      case 'AC':
        return AceClubs;
        break;
      case 'AD':
        return AceDiamonds;
        break;
      case 'AH':
        return AceHearts;
        break;
      case 'AS':
        return AceSpades;
        break;
    }
  }

  generateCard = () => {
    let card;
    let value = Math.floor(Math.random() * 13) + 2;
    let suit = Math.floor(Math.random() * 4) + 1;

    if(value > 9){
      switch (value) {
        case 10:
          card = 'T';
          break;
        default:
        case 11:
          card = 'J';
          break;
        case 12:
          card = 'Q';
          break;
        case 13:
          card = 'K';
          break;
      }
    } else {
      card = value;
    }

    switch (suit) {
      case 1:
        card += 'C';
        break;
      case 2:
        card += 'H';
        break;
      case 3:
        card += 'S';
        break;
      case 4:
        card += 'D';
        break;
    }

    return card;
  }

}

export default Card;
