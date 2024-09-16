import MyCard from "./Card.tsx";
import {RankObjects, suitObjects} from "./types.ts";


const App = () => {
  return (
    <div className="playingCards faceImages">
      <MyCard suit={suitObjects.DIAMS} rank={RankObjects.K}/>
      <MyCard suit={suitObjects.HEARTS} rank={RankObjects.Q}/>
      <MyCard suit={suitObjects.CLUBS} rank={RankObjects.RANK_3}/>
      <MyCard suit={suitObjects.SPADES} rank={RankObjects.RANK_10}/>
    </div>
  );
};

export default App;
