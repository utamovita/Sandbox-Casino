import React from 'react';
import {useDispatch} from 'react-redux';
import {increment} from './actions';

class Dice extends React.Component {

    state = {
        counter: 0,
        roll: 1,
    }

    // const dispatch = useDispatch();

    handleRoll = () => {
        let counter = this.state.counter;
        counter++;
        let rollNumber =  Math.floor(Math.random()*6) + 1;
 
        this.setState({
            counter,
            roll: rollNumber,
        })  
        
        this.props.handleRoll(counter, rollNumber);       
    }

    render() {
        return (
            <div className="dice">
                <div className={'roll num' + this.state.roll} onClick={this.handleRoll}>
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
}


export default Dice;