import Card from "./Card.ts";
import {RankObjects, suitObjects} from "../types.ts";

class CardDeck {
    private cards: Card[] = [];
    constructor() {
        Object.values(suitObjects).forEach((suit) => {
          Object.values(RankObjects).forEach((rank) => {
            const card = new Card(rank, suit);
            this.cards.push(card);
        });
      });
    }
  getCard() {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(randomIndex, 1);
  }

  getCards(howMany: number) {
      const resultingCards: Card[] = [];
      for (let i = 0; i < howMany; i++) {
        const card = this.getCard();
        resultingCards.push(card);
      }
      return resultingCards;
  }
}

export default CardDeck;