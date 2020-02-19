const initialStatistics = {
  balance: 0,
  gamesPlayed: 0,
  lastNum: 1,
  win: 0,
  lose: 0,

  strike: {
    wins: 0,
    losses: 0,
    maxWins: 0,
    maxLosses: 0
  },

  numbers: {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0
  }
};

const counterReducer = (state = initialStatistics, action) => {
  switch (action.type) {
    case "NEWGAME":
      state.lastNum = action.payload;
      state.gamesPlayed += 1;
      state.numbers["num" + action.payload] += 1;
      return state;

    case "PLAYER_WINS":
      state.win += 1;
      state.strike.wins += 1;
      state.strike.losses = 0;
      if(state.strike.MaxWins < state.strike.wins) state.strike.MaxWins += 1;
      return state;

    case "PLAYER_LOSSES":
      state.lose += 1;
      state.strike.losses += 1;
      state.strike.wins = 0;
      if(state.strike.MaxLosses < state.strike.losses) state.strike.MaxLosses += 1;
      return state;

    default:
      return state;
  }
};

export default counterReducer;
