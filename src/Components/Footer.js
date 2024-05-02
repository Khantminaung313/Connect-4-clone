import React from 'react'

const Footer = ({onClickEvent, onSuggestMove, gameState}) => {
  const renderButton = () => {
    if(gameState !== 1) {
      return <button onClick={onClickEvent}>New Game</button>
    } else {
      return <button onClick={onSuggestMove}>Suggest</button>
    }
  }
  return (
    <div className='footer'>
      {renderButton()}
    </div>
  )
}

export default Footer