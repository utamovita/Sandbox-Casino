import React from 'react';
import GameSettings from './game-settings/gameSettings';
import Statistics from './statistics';
import GameLog from './gameLog';
import Dice from './dice';
import { Container } from '@material-ui/core';

class HighLow extends React.Component {

    state = {
        bet: 'High',
        games: [
            {id: 0 , rollNumber: 0, bet: 'High',},
        ], 
        rolled: {one: 0, two: 0, three: 0, four: 0, five: 0, six: 0}  
    }
    

    handleRoll = (id, rollNumber) => {
        let currentState = this.state.games;
        let one = this.state.rolled.one;
        let two = this.state.rolled.two;
        let three = this.state.rolled.three;
        let four = this.state.rolled.four;
        let five = this.state.rolled.five;
        let six = this.state.rolled.six;

        let game = {id, rollNumber, bet: this.state.bet}

        currentState.unshift(game);
        if(rollNumber === 1){
            one++;
        } else if(rollNumber === 2){
            two++;
        } else if(rollNumber === 3){
            three++;
        } else if(rollNumber === 4){
            four++;
        } else if(rollNumber === 5){
            five++;
        } else six++;
        
        this.setState({
            games: currentState,
            rolled: {one ,two, three, four, five, six}
        }) 
    }

    handleBet = (bet) => {
        this.setState({ bet })
      }
    
    render() {
        console.log(this.state.one)
        return (
            <Container className="game-container">
                <GameSettings handleBet={this.handleBet}/>
                <GameLog games={this.state.games}/>
                <Dice handleRoll={this.handleRoll} />
                <Statistics played={this.state.games} rolled={this.state.rolled}/>
            </Container>
        );
    }
    
}

export default HighLow;