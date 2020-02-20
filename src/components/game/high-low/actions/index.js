export const newGame = num => {
    return {
        type: "NEWGAME",
        payload: num
    };
};

export const playerWins = (ratio, betAmount) => {
    return {
        type: "PLAYER_WINS",
        payload: {
            ratio,
            betAmount
        }
    };
};

export const playerLosses = (ratio, betAmount) => {
    return {
        type: "PLAYER_LOSSES",
        payload: {
            ratio,
            betAmount
        }
    };
};

export const changeSettings = (ratio, bet, betAmount) => {
    return {
        type: "CHANGE_SETTINGS",
        payload: {
            ratio,
            bet,
            betAmount
        }
    };
};

export const gameHistory = (num, result, bet) => {
    return {
        type: "GAME_HISTORY",
        num,
        result,
        bet
    };
};
