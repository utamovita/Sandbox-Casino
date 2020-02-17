const initialOptions = {
    bet: 'high',
    ratio: 1.8,
    betAmount: 1
}

export const gameSettings = (state = initialOptions, action) => {
    if (action.type === 'UPDATE_SETTINGS') {
        // user changed game settings
        return state;
    }

    return state;
}