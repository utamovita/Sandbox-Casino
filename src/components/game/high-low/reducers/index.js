import counterReducer from "./counter";
import settingsReducer from "./settings";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
});

export default allReducers;
