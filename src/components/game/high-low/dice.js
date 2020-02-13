import React from 'react';

class Dice extends React.Component {

    state = {
        number: 1,
    }

    handleRoll = (e) => {
        let number =  Math.floor(Math.random()*6) + 1;
     
        this.setState({
            number,
        })         
    }

    render() {
        return (
            <div className="dice">
                <div className={'roll num' + this.state.number} onClick={this.handleRoll}>
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