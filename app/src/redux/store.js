import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getGamesReducer, getGamesDetailReducer, cartReducer } from './reducers/gameReducer';

const reducers = combineReducers({
    getGames:getGamesReducer,
    getGameDetail: getGamesDetailReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;