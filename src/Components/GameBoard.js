import React, { useEffect, useState } from "react";
import { getComputerMove, isDraw, isWinner } from "../helper";
import Footer from "./Footer";
import GameCircle from "./GameCircle";
import Header from "./Header";

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const TOTAL = 16;
const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState();

  useEffect(() => {
    initGame();
  }, [])
  

  const initGame = () => {
      setGameBoard(Array(16).fill(NO_PLAYER));
      setCurrentPlayer(PLAYER_1);    
      setGameState(GAME_STATE_PLAYING);
  }

  const TotalCircle = () => {
    let box = [];
    for(let i = 0 ; i < TOTAL; i++) {
        box.push(RenderCircle(i));
    }
    return box;
  }

  const computerMove = () => {
    onCircleClicked(getComputerMove(gameBoard))
  }

  const onCircleClicked = (id) => {
    if(gameBoard[id] !== 0) return;
    if(gameState !== GAME_STATE_PLAYING) return;

    if(isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    } else if(isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
    }
    
    setGameBoard(prev => {
      return prev.map((circle, circleId) => {
        if(circleId === id) return currentPlayer;
        return circle;
      })
    })
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
  };

  const RenderCircle = (id) => {
    return <GameCircle key={id} id={id} className={`gameCircle PLAYER_${gameBoard[id]}`} onCircleClicked={onCircleClicked} />
  }

  return (
    <>
    <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
    <div className="gameBoard">
      {TotalCircle()}
    </div>
    <Footer onClickEvent={initGame} onSuggestMove={computerMove} gameState={gameState}/>
    </>
  );
};

export default GameBoard;
