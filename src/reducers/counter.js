const initialStatistics = {
    gamesPlayed: 0,
    lastNum: 1,
    balance: 0,

    numberCounter: {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        num6: 0
    },

    streak: {
        wins: 0,
        loses: 0
    }
}

export const counter = (state = initialStatistics, action) => {
    if (action.type === 'NEW_GAME') {
        state.gamesPlayed += 1;
        state.lastNum = action.payload;
        state.numberCounter['num' + action.payload] += 1;
    }

    return state;
}