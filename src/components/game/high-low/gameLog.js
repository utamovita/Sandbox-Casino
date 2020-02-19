import React from "react";
import GameResult from "./gameResult";

const GameLog = props => {
    const { games } = props;

    const results = games.map(result => <GameResult key={result.id} number={result.rollNumber} bet={result.bet} />);
    return (
        <div className="game-log">
            <h2>Game history</h2>
            <div className="history">{results}</div>
        </div>
    );
};

export default GameLog;
