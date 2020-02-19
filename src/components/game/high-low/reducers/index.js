import counterReducer from "./counter";
import settingsReducer from "./settings";
import { combineReducers } from "redux";
import historyReducer from "./history";

const allReducers = combineReducers({
    counter: counterReducer,
    settings: settingsReducer,
    history: historyReducer
});

export default allReducers;
