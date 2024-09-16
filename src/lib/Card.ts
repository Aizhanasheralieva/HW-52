interface Props {
  rank: string;
  suit: string;
}
class Card {
    constructor (rank, suit) {
        this.rank = rank;
        this.suit = suit;

    }

}

export default Card;