const initialStatistics = {
    balance: 10000,
    gamesPlayed: 0,
    lastNum: 1,
    win: 0,
    lose: 0,

    strike: {
        wins: 0,
        losses: 0,
        maxWins: 0,
        maxLosses: 0
    },

    numbers: {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        num6: 0
    }
};

const counterReducer = (state = initialStatistics, action) => {
    switch (action.type) {
        case "NEWGAME":
            state.lastNum = action.payload;
            state.gamesPlayed += 1;
            state.numbers["num" + action.payload] += 1;
            return state;

        case "PLAYER_WINS":
            state.win += 1;
            state.strike.wins += 1;
            state.strike.losses = 0;
            if (state.strike.maxWins < state.strike.wins) state.strike.maxWins = state.strike.wins;
            const prize = action.payload.betAmount * action.payload.ratio;
            state.balance -= action.payload.betAmount;
            state.balance += prize;
            const newBalanceWin = state.balance.toFixed(2);
            state.balance = newBalanceWin;
            return state;

        case "PLAYER_LOSSES":
            state.lose += 1;
            state.strike.losses += 1;
            state.strike.wins = 0;
            if (state.strike.maxLosses < state.strike.losses) state.strike.maxLosses = state.strike.losses;
            state.balance -= action.payload.betAmount;
            const newBalanceLose = state.balance.toFixed(2);
            state.balance = newBalanceLose;
            return state;

        default:
            return state;
    }
};

export default counterReducer;
