import React from 'react'

const GameResult= (props) => {

  const { num, bet } = props;

  let a;

  if(bet === 'High' && num > 3){
    a = 'win'
  } else if (bet === 'High' && num <= 3) {
    a = 'lose'
  } else if (bet === 'Low' && num <= 3){
    a = 'win'
  } else if (bet === 'Low' && num > 3) {
    a = 'lose'
  }

    return (
        <div className="record">
          {(num > 0) ? `You rolled ${num}, you ${a}.` : ""} 
        </div>
    )
}

export default GameResult;