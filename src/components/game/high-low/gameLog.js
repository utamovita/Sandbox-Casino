import React from 'react';
import GameResult from './gameResult';

const GameLog = (props) => {
  
  const { number, bet } = props;
  
  const results = number.map(result => <GameResult key={result.id} num={result.number} bet={bet}/>)
    return (
      <div className="game-log">
        <h2>Game history</h2>
        {results}
      </div>
    )

}

export default GameLog;