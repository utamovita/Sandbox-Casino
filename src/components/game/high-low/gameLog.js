import React from 'react'

class GameLog extends React.Component {

  render() {
    console.log(this.props.number)
    return (
      <div className="game-log">
        <h2>Game history</h2>
        <div className="record">
          You rolled {this.props.number}, you win.
          
        </div>
        <div className="record">
          You rolled 1, you lose. 
        </div>
      </div>
    )
  }
}

export default GameLog;