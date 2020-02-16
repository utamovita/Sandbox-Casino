import React from 'react'

const GameResult= (props) => {

  const { number, bet } = props;

  let gameResult;

  if(bet === 'High' && number > 3){
    gameResult = 'win'
  } else if (bet === 'High' && number <= 3) {
    gameResult = 'lose'
  } else if (bet === 'Low' && number <= 3){
    gameResult = 'win'
  } else if (bet === 'Low' && number > 3) {
    gameResult = 'lose'
  }

    return (
        <div className="record">
          {(number > 0) ? `You rolled ${number}, you ${gameResult}. (${bet})` : ""} 
        </div>
    )
}

export default GameResult;