import React from 'react';
import { useDispatch } from 'react-redux';
import { newGame, playerWins, playerLoses } from './../../../actions';
import { useSelector } from 'react-redux';

function Dice() {
    const dispatch = useDispatch();
    let randomNum = useSelector(state => state.counter.lastNum);
    let playerBet = useSelector(state => state.gameSettings.bet);

    const handleRoll = () => {
        let number = Math.floor(Math.random() * 6) + 1;
        dispatch(newGame(number));

        if (number > 3 && playerBet) dispatch(playerWins());
        else dispatch(playerLoses());

        setTimeout(handleRoll, 5);
    }



    return (
        <div className="dice">
            <div className={'roll num' + randomNum} onClick={handleRoll}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Dice;