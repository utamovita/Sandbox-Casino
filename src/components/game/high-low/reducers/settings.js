const initialSettings = {
    ratio: 1.8,
    bet: "High",
    betAmount: 1,
    a: 1.6,
    sandbox: 0
};

const settingsReducer = (state = initialSettings, action) => {
    switch (action.type) {
        case "CHANGE_SETTINGS":
            state.ratio = action.payload.ratio;
            state.bet = action.payload.bet;
            state.betAmount = action.payload.betAmount;
            return state;

        case "AUTO_CHANGE_BET_LOSE":
            state.betAmount = state.betAmount * state.a;
            const newBetAmount = state.betAmount.toFixed(2);
            state.betAmount = newBetAmount;
            state.a += 0.6;
            const newA = state.a.toFixed(1);
            state.a = parseFloat(newA);
            return state;
        case "AUTO_CHANGE_BET_WIN":
            state.betAmount = 1;
            state.a = 1.6;
            return state;

        case "SANDBOX_MODE":
            if (state.sandbox === 0) {
                state.sandbox = 1;
            } else if (state.sandbox === 1) {
                state.sandbox = 2;
            } else {
                state.sandbox = 0;
            }
            console.log(state.sandbox);
            return state;

        default:
            return state;
    }
};

export default settingsReducer;
