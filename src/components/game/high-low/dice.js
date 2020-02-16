import React from 'react';
import { useDispatch } from 'react-redux';
import { newGame } from './../../../actions';
import { useSelector } from 'react-redux';

function Dice() {
    const dispatch = useDispatch();

    const handleRoll = () => {
        let number = Math.floor(Math.random() * 6) + 1;
        dispatch(newGame(number));
    }

    let randomNum = useSelector(state => state.counter.lastNum);

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