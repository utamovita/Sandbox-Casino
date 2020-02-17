export const newGame = num => {
    return {
        type: 'NEW_GAME',
        payload: num
    };
}

export const playerWins = () => {
    return {
        type: 'PLAYER_WINS'
    };
}

export const playerLoses = () => {
    return {
        type: 'PLAYER_LOSES'
    };
}