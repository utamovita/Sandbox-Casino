export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

export const randomNumber = num => {
    return {
        type: 'RANDOM_NUM',
        payload: num
    };
}