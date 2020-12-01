import * as actionTypes from './actionTypes';

import axios from '../../axios-orders';
export const addIngredient = (ingredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName,
  };
};
export const removeIngredient = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName,
  };
};
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};
export const fetchIngredientsFailed = (error) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error,
  };
};
export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get('/ingredients.json')
      .then((response) => {
        const ingredients = response.data;

        dispatch(setIngredients(ingredients));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed(error));
      });
    return;
  };
};
