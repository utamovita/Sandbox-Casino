import React from 'react';
import { Button } from '@material-ui/core';

const dice = () => {

    const handleRoll = () => {
        console.log(Math.floor(Math.random()*6) + 1);
    }

    return (
        <div class="dice">
            <Button color="primary" variant="contained" onClick={handleRoll}>Roll</Button>
            <div className="roll six">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}


export default dice;