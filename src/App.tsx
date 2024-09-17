import React, { useState } from "react";
import CardDeck from "./lib/CardDeck.ts";
import Card from "./lib/Card.ts";
import MyCardComponent from "./PlayCard.tsx";
import PokerHand from "./lib/PokerHand.ts";

const App = () => {
  const [deck] = useState(new CardDeck());
  const [cards, setCards] = useState<Card[]>([]);
  const [totalCards, setTotalCards] = useState(deck.getTotalCards());
  const [handOutcome, setHandOutcome] = useState<string>("");

  const deal = () => {
    const newCards = deck.getCards(5);
    setCards(newCards);
    setTotalCards(deck.getTotalCards());
    setHandOutcome(new PokerHand(newCards).getOutcome());
  };

  return (
    <div className="body">
      <button className="dealBtn" onClick={deal}>Deal</button>
      <div className="playingCards">
        {cards.map((card) => (
          <MyCardComponent key={card.suit + '-' + card.rank} suit={card.suit} rank={card.rank} />
        ))}
      </div>
      <div><strong>Total cards: </strong><i>{totalCards}</i></div>
      <div><strong>Hand outcome: </strong><i>{handOutcome}</i></div>
    </div>
  );
};

export default App;
