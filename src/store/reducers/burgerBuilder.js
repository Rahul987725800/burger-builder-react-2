import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  ingredients: null,

  totalPrice: 4,
  error: null,
  building: false,
};
export const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};
const addIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: updateObject(state.ingredients, {
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
    }),
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  });
};
const removeIngredient = (state, action) => {
  if (state.ingredients[action.ingredientName] === 0) return state;
  return updateObject(state, {
    ingredients: updateObject(state.ingredients, {
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
    }),
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  });
};
const setIngredients = (state, action) => {
  let ingredients = action.ingredients;
  let totalPrice = 4;
  for (let key in ingredients) {
    totalPrice += ingredients[key] * INGREDIENT_PRICES[key];
  }
  return updateObject(state, {
    ingredients: {
      salad: ingredients.salad,
      bacon: ingredients.bacon,
      cheese: ingredients.cheese,
      meat: ingredients.meat,
    },
    totalPrice,
    error: null,
    building: false,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, {
        error: action.error,
      });
    default:
      return state;
  }
};
export default reducer;
