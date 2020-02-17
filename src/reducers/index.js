import { counter } from './counter';
import { gameSettings } from './settings';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter,
    gameSettings
})

export default allReducer;