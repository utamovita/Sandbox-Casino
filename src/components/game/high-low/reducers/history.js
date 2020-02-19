const initialHistory = ["Click dice to roll!"];

const historyReducer = (state = initialHistory, action) => {
    switch (action.type) {
        case "GAME_HISTORY":
            const string = `You rolled ${action.num}, you ${action.result} (${action.bet})`;

            return [...state, string];
        default:
            return state;
    }
};

export default historyReducer;
