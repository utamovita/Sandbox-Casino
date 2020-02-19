import React from "react";
import { useSelector } from "react-redux";

const GameResult = props => {
    const counter = useSelector(state => state.counter);

    const { number, bet } = props;

    let gameResult;

    if (bet === "High" && number > 3) {
        gameResult = "win";
    } else if (bet === "High" && number <= 3) {
        gameResult = "lose";
    } else if (bet === "Low" && number <= 3) {
        gameResult = "win";
    } else if (bet === "Low" && number > 3) {
        gameResult = "lose";
    }

    return <div className="record">{number > 0 ? `You rolled ${counter}, you ${gameResult}. (${bet})` : ""}</div>;
};

export default GameResult;
