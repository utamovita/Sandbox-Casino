import { counter } from './counter';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter
})

export default allReducer;