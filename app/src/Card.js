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
      case '2D':
        return TwoDiamonds;
      case '2H':
        return TwoHearts;

      case '2S':
        return TwoSpades;

      case '3C':
        return ThreeClubs;

      case '3D':
        return ThreeDiamonds;

      case '3H':
        return ThreeHearts;

      case '3S':
        return ThreeSpades;

      case '4C':
        return FourClubs;

      case '4D':
        return FourDiamonds;

      case '4H':
        return FourHearts;

      case '4S':
        return FourSpades;

      case '5C':
        return FiveClubs;

      case '5D':
        return FiveDiamonds;

      case '5H':
        return FiveHearts;

      case '5S':
        return FiveSpades;

      case '6C':
        return SixClubs;

      case '6D':
        return SixDiamonds;

      case '6H':
        return SixHearts;

      case '6S':
        return SixSpades;

      case '7C':
        return SevenClubs;

      case '7D':
        return SevenDiamonds;

      case '7H':
        return SevenHearts;

      case '7S':
        return SevenSpades;

      case '8C':
        return EightClubs;

      case '8D':
        return EightDiamonds;

      case '8H':
        return EightHearts;

      case '8S':
        return EightSpades;

      case '9C':
        return NineClubs;

      case '9D':
        return NineDiamonds;

      case '9H':
        return NineHearts;

      case '9S':
        return NineSpades;

      case 'TC':
        return TenClubs;

      case 'TD':
        return TenDiamonds;

      case 'TH':
        return TenHearts;

      case 'TS':
        return TenSpades;

      case 'JC':
        return JackClubs;

      case 'JD':
        return JackDiamonds;

      case 'JH':
        return JackHearts;

      case 'JS':
        return JackSpades;

      case 'QC':
        return QueenClubs;

      case 'QD':
        return QueenDiamonds;

      case 'QH':
        return QueenHearts;

      case 'QS':
        return QueenSpades;

      case 'KC':
        return KingClubs;

      case 'KD':
        return KingDiamonds;

      case 'KH':
        return KingHearts;

      case 'KS':
        return KingSpades;

      case 'AC':
        return AceClubs;

      case 'AD':
        return AceDiamonds;

      case 'AH':
        return AceHearts;

      case 'AS':
        return AceSpades;

      default:
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
        case 11:
          card = 'J';
          break;
        case 12:
          card = 'Q';
          break;
        case 13:
          card = 'K';
          break;
        default:
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
      default:
    }

    return card;
  }

}

export default Card;
