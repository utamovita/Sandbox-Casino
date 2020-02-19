export const newGame = (num) => {
    return {
        type:'NEWGAME',
        payload: num
    }
}

export const playerWins = () => {
    return {
        type:'PLAYER_WINS'
    }
}

export const playerLosses = () => {
    return {
        type:'PLAYER_LOSSES'
    }
}



export const changeSettings = (ratio, bet, betAmount) => {
    return {
        type: 'CHANGE_SETTINGS',
        payload: {
            ratio,
            bet,
            betAmount,
        },
    }
}