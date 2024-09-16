
import {useState} from "react";
import CardDeck from "./lib/CardDeck.ts";
import Card from "./lib/Card.ts";
import MyCardComponent from "./PlayCard.tsx";


const App = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const deal = () => {
    const deck = new CardDeck();
    const newCards = deck.getCards(5);
    setCards(newCards);
  };
  return (
    <>
      <div className="container">
        <div className="playingCards faceImages">
          {cards.map((card) => (
            <MyCardComponent key={card.suit + '-' + card.rank} suit={card.suit} rank={card.rank}/>
          ))}
        </div>
        <div>
          <button className="dealBtn" onClick={deal}>Deal</button>
        </div>
      </div>
    </>
  )
};

export default App;
