import React from 'react';
import GameSettings from './gameSettings';
import Statistics from './statistics';
import GameLog from './gameLog';
import Dice from './dice';
import Return from '../../return';

const Blackjack = () => {
    return (
        <>
            <GameSettings/>
            <GameLog/>
            <Dice/>
            <Statistics/>
            <Return/>
        </>
    );
};

export default Blackjack;