const initialHistory = ["Click dice to roll!"];

const historyReducer = (state = initialHistory, action) => {
    switch (action.type) {
        case "GAME_HISTORY":
            state.push(`You rolled ${action.num}, you ${action.result} (${action.bet})`);
            return state;
        default:
            return state;
    }
};

export default historyReducer;
