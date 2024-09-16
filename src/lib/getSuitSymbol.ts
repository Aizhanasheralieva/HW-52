import {suitObjects} from "../types.ts";


const getSuitSymbol = (suit: suitObjects) => {
  switch (suit) {
    case suitObjects.DIAMS:
      return '♦';
    case suitObjects.HEARTS:
      return ' ♥';
    case suitObjects.SPADES:
      return '♠';
    case suitObjects.CLUBS:
      return '♣';
    default:
      throw new Error(`Unavailable suit: ${suitObjects}`);
  }
};

export default getSuitSymbol;