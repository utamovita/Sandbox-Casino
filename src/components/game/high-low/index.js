import React from 'react';
import GameSettings from './game-settings/gameSettings';
import Statistics from './statistics';
import GameLog from './gameLog';
import Dice from './dice';
import { Container } from '@material-ui/core';

class HighLow extends React.Component {

    state = {
        counter: 0,
        number: [
            {id: 0 , number: 0},
        ],
        bet: 'High',
    }
    

    handleRoll = (number) => {
        let counter = this.state.counter;
        counter++;
        let b = this.state.number;

        let a = {id: counter, number: number}

        b.unshift(a);
        this.setState({
            counter,
            number: b,
        })  
    }

    handleBet = (target) => {
        this.setState({ bet: target })
      }
    
    render() {
        return (
            <Container className="game-container">
                <GameSettings handleBet={this.handleBet}/>
                <GameLog number={this.state.number} bet={this.state.bet}/>
                <Dice handleRoll={this.handleRoll} />
                <Statistics played={this.state.counter}/>
            </Container>
        );
    }
    
}

export default HighLow;