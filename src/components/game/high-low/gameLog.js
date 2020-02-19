import React from "react";
import GameResult from "./gameResult";
import { useSelector } from "react-redux";

const GameLog = () => {
    const gameHistory = useSelector(state => state.history);

    const results = gameHistory.map(result => <GameResult key="1" string={result} />);

    return (
        <div className="game-log">
            <h2>Game history</h2>
            <div className="history">{results}</div>
        </div>
    );
};

export default GameLog;
