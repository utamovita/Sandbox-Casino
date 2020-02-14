const initialState = {
    gamesPlayed: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
}

export const counter = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { ...state, gamesPlayed: state.gamesPlayed }
        default:
            return state;
    }
}

export const randomNumber = (state = 1, action) => {
    switch (action.type) {
        case 'RANDOM_NUM':
            return state = action.payload;
        default:
            return state;
    }
}

