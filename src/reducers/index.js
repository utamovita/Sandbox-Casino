import { counter, randomNumber} from './counter';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter,
    randomNumber
})

export default allReducer;