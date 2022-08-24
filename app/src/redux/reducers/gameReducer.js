import * as actionType from "../constants/gameConstants";

export const getGamesReducer = (state = {games:[]}, action) => {
  switch (action.type) {
    case actionType.GET_GAMES_SUCCESS:
      return { games: action.payload };
    case actionType.GET_GAMES_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
