const initialStatistics = {
    gamesPlayed: 0,
    lastNum: 1,
    balance: 0,
    wins: 0,
    loses: 0,

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
        loses: 0,
        maxWins: 0,
        maxLoses: 0
    }
}

export const counter = (state = initialStatistics, action) => {
    if (action.type === 'NEW_GAME') {
        state.gamesPlayed += 1;
        state.lastNum = action.payload;
        state.numberCounter['num' + action.payload] += 1;
    }

    if (action.type === 'PLAYER_WINS') {
        state.wins += 1;
        state.streak.wins += 1;
        state.streak.loses = 0;
        console.log('player wins');
        if (state.streak.wins > state.streak.maxWins) state.streak.maxWins += 1;
    }

    if (action.type === 'PLAYER_LOSES') {
        state.loses += 1;
        state.streak.loses += 1;
        state.streak.wins = 0;
        console.log('player loses');
        if (state.streak.loses > state.streak.maxLoses) state.streak.maxLoses += 1;
    }

    return state;
}