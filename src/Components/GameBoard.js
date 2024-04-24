import React from "react";
import GameCircle from "./GameCircle";
import "../Game.css";

const GameBoard = () => {
  const onCircleClicked = (id) => {
    console.log("click:" + id);
  };

  return (
    <div className="gameBoard">
      <GameCircle id={1} onCircleClicked={onCircleClicked} />
      <GameCircle id={2} onCircleClicked={onCircleClicked} />
      <GameCircle id={3} onCircleClicked={onCircleClicked} />
      <GameCircle id={4} onCircleClicked={onCircleClicked} />
      <GameCircle id={5} />
      <GameCircle id={6} />
      <GameCircle id={7} />
      <GameCircle id={8} />
      <GameCircle id={9} />
      <GameCircle id={10} />
      <GameCircle id={11} />
      <GameCircle id={12} />
      <GameCircle id={13} />
      <GameCircle id={14} />
      <GameCircle id={15} />
      <GameCircle id={16} />
    </div>
  );
};

export default GameBoard;
