import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGame, playerWins, playerLosses, gameHistory } from "./actions";

const Dice = () => {
    const dispatch = useDispatch();
    const counterLastNum = useSelector(state => state.counter.lastNum);
    const settingsRatio = useSelector(state => state.settings.ratio);
    const settingsBet = useSelector(state => state.settings.bet);
    const settingsBetAmount = useSelector(state => state.settings.betAmount);

    const handleRoll = () => {
        if (settingsBetAmount < 1) return window.alert("Minimal bet 1$ - take it or leave!");
        let rollNumber = Math.floor(Math.random() * 6) + 1;
        dispatch(newGame(rollNumber));

        if ((settingsBet === "High" && rollNumber > 3) || (settingsBet === "Low" && rollNumber <= 3)) {
            dispatch(gameHistory(rollNumber, "win", settingsBet));
            dispatch(playerWins(settingsRatio, settingsBetAmount));
        } else {
            dispatch(gameHistory(rollNumber, "lose", settingsBet));
            dispatch(playerLosses(settingsRatio, settingsBetAmount));
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
