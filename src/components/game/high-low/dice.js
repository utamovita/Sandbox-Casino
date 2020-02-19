import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGame, playerWins, playerLosses, gameHistory } from "./actions";

const Dice = () => {
    const dispatch = useDispatch();
    const counterLastNum = useSelector(state => state.counter.lastNum);
    const settingsBet = useSelector(state => state.settings.bet);

    const handleRoll = () => {
        let rollNumber = Math.floor(Math.random() * 6) + 1;
        dispatch(newGame(rollNumber));

        if ((settingsBet === "High" && rollNumber > 3) || (settingsBet === "Low" && rollNumber <= 3)) {
            dispatch(gameHistory(rollNumber, "win", settingsBet));
            dispatch(playerWins());
        } else {
            dispatch(gameHistory(rollNumber, "lose", settingsBet));
            dispatch(playerLosses());
        }
    };

    return (
        <div className="dice">
            <div className={"roll num" + counterLastNum} onClick={handleRoll}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Dice;
