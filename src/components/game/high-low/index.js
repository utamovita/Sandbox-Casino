import React from 'react';
import GameSettings from './game-settings/gameSettings';
import Statistics from './statistics';
import GameLog from './gameLog';
import Dice from './dice';
import { Container } from '@material-ui/core';

const Blackjack = () => {
    return (
        <Container className="game-container">
            <GameSettings/>
            <GameLog/>
            <Dice/>
            <Statistics/>
        </Container>
    );
};

export default Blackjack;