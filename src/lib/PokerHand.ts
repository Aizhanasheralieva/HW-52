import Card from "./Card.ts";
import { RankObjects } from "../types.ts";

class PokerHand {
  constructor(private cards: Card[]) {}


  public receiveTheFinalResult(): string {
    if (this.isOnePair()) {
      return 'One pair';
    }
    if (this.isTwoPairs()) {
      return 'Two pairs';
    }
    if (this.isThreeOfAKind()) {
      return 'Three of a kind';
    }
    if (this.isFlush()) {
      return 'Flush';
    } else {
      return `High card: ${this.getHighCard().rank}`;
    }
  }


  private isOnePair(): boolean {
    const rankCounts: Record<string, number> = this.getRankCounts();
    return Object.values(rankCounts).includes(2);
  }


  private isTwoPairs(): boolean {
    const rankCounts: Record<string, number> = this.getRankCounts();
    const pairs = Object.values(rankCounts).filter(count => count === 2);
    return pairs.length === 2;
  }


  private isThreeOfAKind(): boolean {
    const rankCounts: Record<string, number> = this.getRankCounts();
    return Object.values(rankCounts).includes(3);
  }


  private isFlush(): boolean {
    const suit = this.cards[0].suit;
    return this.cards.every(card => card.suit === suit);
  }

  private getHighCard(): Card {
    const rankOrder = Object.values(RankObjects);
    return this.cards.reduce((highCard, currentCard) => {
      return rankOrder.indexOf(currentCard.rank) > rankOrder.indexOf(highCard.rank) ? currentCard : highCard;
    });
  }


  private getRankCounts(): Record<string, number> {
    const rankCounts: Record<string, number> = {};
    this.cards.forEach(card => {
      const rank = card.rank;
      rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    });
    return rankCounts;
  }
}

export default PokerHand;
