import React from 'react'

function GameLog() {
  return (
    <div className="game-log">
      <h2>Game history</h2>
      <div className="record">
        You rolled 4, you win.
      </div>
      <div className="record">
        You rolled 1, you lose. 
      </div>
    </div>
  )
}

export default GameLog;