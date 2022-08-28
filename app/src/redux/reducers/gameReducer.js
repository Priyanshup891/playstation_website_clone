import * as actionType from "../constants/gameConstants";

export const getGamesReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case actionType.GET_GAMES_SUCCESS:
      return { games: action.payload };
    case actionType.GET_GAMES_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getGamesDetailReducer = (state = { game: {} }, action) => {
  switch (action.type) {
    case actionType.GET_GAMES_DETAILS_REQUEST:
      return { loading: true };
    case actionType.GET_GAMES_DETAILS_SUCCESS:
      return { loading: false, game: action.payload };
    case actionType.GET_GAMES_DETAILS_FAIL:
      return { loading: false, game: action.payload };
    case actionType.GET_GAMES_DETAILS_RESET:
      return { game: {} };
    default:
      return state;
  }
};

export const cartReducer = (state = {cartItems:[]}, action) => {
  switch(action.type){
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find(game => game._id === item._id);
      if(exist){
        return {...state, cartItems: state.cartItems.map(data => data.game === exist.game ? item : data)};
      } else {
        return {...state, cartItems: [...state.cartItems, item]};
      }
    case actionType.REMOVE_FROM_CART:
      return {...state, cartItems: state.cartItems.filter(game => game._id !== action.payload)}
    default:
      return state;  
      
  }
}