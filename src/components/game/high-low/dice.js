import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    newGame,
    playerWins,
    playerLosses,
    gameHistory,
    autoChangeBetLose,
    autoChangeBetWin,
    sandboxMode
} from "./actions";

const Dice = () => {
    const dispatch = useDispatch();
    const counterLastNum = useSelector(state => state.counter.lastNum);
    const sandbox = useSelector(state => state.settings.sandbox);
    const settingsRatio = useSelector(state => state.settings.ratio);
    const settingsBet = useSelector(state => state.settings.bet);
    const settingsBetAmount = useSelector(state => state.settings.betAmount);
    let timeOut;

    const handleRoll = () => {
        if (settingsBetAmount < 1) return window.alert("Minimal bet 1$ - take it or leave!");
        let rollNumber = Math.floor(Math.random() * 6) + 1;
        dispatch(newGame(rollNumber));

        if ((settingsBet === "High" && rollNumber > 3) || (settingsBet === "Low" && rollNumber <= 3)) {
            dispatch(gameHistory(rollNumber, "win", settingsBet));
            dispatch(playerWins(settingsRatio, settingsBetAmount));
            dispatch(autoChangeBetWin());
        } else {
            dispatch(gameHistory(rollNumber, "lose", settingsBet));
            dispatch(playerLosses(settingsRatio, settingsBetAmount));
            dispatch(autoChangeBetLose());
        }
    };

    if (sandbox === 1) {
        timeOut = setTimeout(handleRoll, 100);
        dispatch(sandboxMode()); // tak srednio bym powiedzial
    } else if (sandbox === 0) {
        clearTimeout(timeOut);
    }

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
