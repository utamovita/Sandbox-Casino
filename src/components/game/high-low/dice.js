import React from 'react';

class Dice extends React.Component {

    state = {
        counter: 0,
        number: [
            {id: 0 , number: 1},
        ],
    }

    handleRoll = (e) => {
        let counter = this.state.counter;
        counter++;
        let b = this.state.number;
        let number =  Math.floor(Math.random()*6) + 1;
        let a = {id: counter, number: number};
        b.unshift(a);
     
        this.setState({
            counter: counter,
            number: b,
        })  
        this.props.handleRoll(number);  

           
    }

    render() {
        return (
            <div className="dice">
                <div className={'roll num' + this.state.number[0].number} onClick={this.handleRoll}>
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