import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, randomNumber } from './../../../actions';
import { useSelector } from 'react-redux';

function Dice (){
    const dispatch = useDispatch();
    
    const handleRoll = () => {
        let number =  Math.floor(Math.random()*6) + 1;
        dispatch(increment());
        dispatch(randomNumber(number));

        console.log(number)     
    } 

    let randomNum = useSelector(state => state.randomNumber);
    
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