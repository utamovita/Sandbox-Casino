import React from 'react';
import GameSettings from './game-settings/gameSettings';
import Statistics from './statistics';
import GameLog from './gameLog';
import Dice from './dice';
import { Container } from '@material-ui/core';

class HighLow extends React.Component {

    state = {
        number: 1,
    }
    

    handleRoll = (number) => {
     
        this.setState({
            number,
        }, console.log('parent: ' + this.state.number) )            
    }

    render() {
        console.log(this.state.number)
        return (
            <Container className="game-container">
                <GameSettings/>
                <GameLog number={this.state.number}/>
                <Dice handleRoll={this.handleRoll} />
                <Statistics/>
            </Container>
        );
    }
    
}

export default HighLow;