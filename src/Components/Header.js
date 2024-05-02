import React from 'react';

const Header = ({gameState, currentPlayer, winPlayer}) => {
  const renderLabel = () => {
    switch(gameState) {
      case 1:
        return <div>Player {currentPlayer}  turn</div>;
      case 2:
        return <div>Player {winPlayer} win </div>;
      case 3:
        return <div>Game is draw!</div>
      default:
    }
  }
  return (
    <div className='panel'>
        <div className="header">{renderLabel()}</div>
    </div>
  )
}

export default Header;