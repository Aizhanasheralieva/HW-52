import React from "react";
import {RankObjects, suitObjects} from "./types.ts";
import getSuitSymbol from "./lib/getSuitSymbol.ts";

type Props = {
  rank: RankObjects;
  suit: suitObjects;
};

const MyCardComponent: React.FC<Props> = ({rank, suit}) => {
  const suitSymbols = getSuitSymbol(suit);

  return (
    <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitSymbols}</span>
    </span>
  );
};
export default MyCardComponent;