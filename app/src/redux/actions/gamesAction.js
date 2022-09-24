import axios from "axios";

import * as actionTypes from "../constants/gameConstants";

const URL = "http://localhost:5000";

export const getGames = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/games`);
    dispatch({
      type: actionTypes.GET_GAMES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_GAMES_FAIL,
      payload: error.message,
    });
  }
};

export const getGameDetail = (id) => async (dispatch) => {
  try{
    dispatch({type: actionTypes.GET_GAMES_DETAILS_REQUEST});
    const { data } = await axios.get(`${URL}/detail/${id}`);
    dispatch({
      type: actionTypes.GET_GAMES_DETAILS_SUCCESS,
      payload: data,
    });
  }catch(error){
    dispatch({
      type: actionTypes.GET_GAMES_DETAILS_FAIL,
      payload: error.message,
    });
  }
}

export const addToCart = (id, quantity) => async(dispatch) => {
  try{
    const {data} = await axios.get(`${URL}/detail/${id}`);
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {...data, quantity}
    })
  }catch(error){
    dispatch({
      type: actionTypes.ADD_TO_CART_ERROR,
      payload: error.message
    })
  }
}

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type:actionTypes.REMOVE_FROM_CART,
    payload: id
  })
}