import React from "react";
import { useSelector } from "react-redux";

const GameLog = () => {
    const gameHistory = useSelector(state => state.history);

    const results = gameHistory.map(result => (
        <div key="1" className="record">
            {result}
        </div>
    ));

    return (
        <div className="game-log">
            <h2>Game history</h2>
            <div className="history">{results}</div>
        </div>
    );
};

export default GameLog;
