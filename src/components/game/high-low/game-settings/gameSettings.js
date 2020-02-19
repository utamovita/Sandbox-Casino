import React from "react";
import { Select, MenuItem, InputLabel, FormControl, Input } from "@material-ui/core";
import Return from "../../../return";
import SandBox from "../sandbox/sandbox";
import { useSelector, useDispatch } from "react-redux";
import { changeSettings } from "../actions";

const GameSettings = () => {
    const dispatch = useDispatch();
    const settingsRatio = useSelector(state => state.settings.ratio);
    const settingsBet = useSelector(state => state.settings.bet);
    const settingsBetAmount = useSelector(state => state.settings.betAmount);

    const handleRatio = e => {
        const target = e.target.value;

        dispatch(changeSettings(target, settingsBet, settingsBetAmount));
    };

    const handleBet = e => {
        const target = e.target.value;

        dispatch(changeSettings(settingsRatio, target, settingsBetAmount));
    };

    const handleBetAmount = e => {
        const target = e.target.value;

        dispatch(changeSettings(settingsRatio, settingsBet, target));
    };

    return (
        <div className="game-settings">
            <Return className="return" />

            {/*Ratio - separete component*/}
            <FormControl className="custom__form-control">
                <InputLabel>Multiplier</InputLabel>
                <Select className="custom__select" onChange={handleRatio} value={settingsRatio}>
                    <MenuItem value="1.8">180%</MenuItem>
                    <MenuItem value="1.9">190%</MenuItem>
                    <MenuItem value="2.0">200%</MenuItem>
                </Select>
            </FormControl>

            {/*Bet - separete component*/}
            <FormControl>
                <InputLabel>Bet</InputLabel>
                <Select onChange={handleBet} value={settingsBet}>
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
            </FormControl>

            {/*Bet amount - separete component*/}
            <FormControl>
                <InputLabel>Bet amount</InputLabel>
                <Input onChange={handleBetAmount} value={settingsBetAmount} minvalue={1} />
            </FormControl>

            <SandBox />
        </div>
    );
};

export default GameSettings;
