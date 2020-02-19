import React from "react";

const GameResult = props => {
    console.log(props.string);
    return <div className="record">{props.string}</div>;
};

export default GameResult;
