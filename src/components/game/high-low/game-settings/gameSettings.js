import React from 'react'
import { Select, MenuItem, InputLabel, FormControl, Input } from '@material-ui/core';
import Return from '../../../return';
import SandBox from '../sandbox/sandbox';

class gameSettings extends React.Component {
    state = {
        bet: 'High',
        ratio: 1.8,
        betAmount: 0.1
    }

    render() {
        return (
            <div className="game-settings">

                <Return className="return" />

                { /*Ratio - separete component*/}
                <FormControl className="custom__form-control">
                    <InputLabel>Multiplier</InputLabel>
                    <Select
                        className="custom__select"
                        onChange={(e) => this.setState({ ratio: e.target.value })}
                        value={this.state.ratio}
                    >
                        <MenuItem value="1.8">180%</MenuItem>
                        <MenuItem value="1.9">190%</MenuItem>
                        <MenuItem value="2.0">200%</MenuItem>
                    </Select>
                </FormControl>

                { /*Bet - separete component*/}
                <FormControl>
                    <InputLabel>Bet</InputLabel>
                    <Select
                        onChange={(e) => this.setState({ bet: e.target.value })}
                        value={this.state.bet}
                    >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </Select>
                </FormControl>

                { /*Bet amount - separete component*/}
                <FormControl>
                    <InputLabel>Bet amount</InputLabel>
                    <Input
                        onChange={(e) => this.setState({ betAmount: e.target.value })}
                        value={this.state.betAmount}
                    />
                </FormControl>

                <SandBox />
            </div>
        )
    }
}

export default gameSettings;