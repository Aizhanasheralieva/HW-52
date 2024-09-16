import {RankObjects, suitObjects} from "../types.ts";

class Card {
    constructor(
      public rank: string,
      public suit: string,
    ) {
        this.rank = rank;
        this.suit = suit;
    }
}

export default Card;