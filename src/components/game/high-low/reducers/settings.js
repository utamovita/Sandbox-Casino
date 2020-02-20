const initialSettings = {
    ratio: 1.8,
    bet: "High",
    betAmount: 1
};

const settingsReducer = (state = initialSettings, action) => {
    switch (action.type) {
        case "CHANGE_SETTINGS":
            state.ratio = action.payload.ratio;
            state.bet = action.payload.bet;
            state.betAmount = action.payload.betAmount;
            return state;
        default:
            return state;
    }
};

export default settingsReducer;
