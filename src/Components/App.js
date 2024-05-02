import React from 'react';
import GameBoard from './GameBoard';

const App = () => {
  return (
    <div id="app">
        <div className='board-container'>
        <GameBoard/>
        </div>
    </div>
  )
}

export default App