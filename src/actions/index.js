export const newGame = num => {
    return {
        type: 'NEW_GAME',
        payload: num
    };
}