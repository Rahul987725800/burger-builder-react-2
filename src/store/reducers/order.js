import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  orders: [],
  loading: false,
  purchased: false,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return updateObject(state, {
        purchased: false,
      });
    case actionTypes.PURCHASE_BURGER_START:
      return updateObject(state, {
        loading: true,
      });
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return updateObject(state, {
        loading: false,
        orders: state.orders.concat(
          updateObject(action.orderData, {
            id: action.orderId,
          })
        ),
        purchased: true,
      });
    case actionTypes.PURCHASE_BURGER_FAIL:
      return updateObject(state, {
        loading: false,
      });
    case actionTypes.FETCH_ORDERS_START:
      return updateObject(state, {
        loading: true,
        error: null,
      });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, {
        orders: action.orders,
        loading: false,
      });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, {
        error: action.error,
        loading: false,
      });
    default:
      return state;
  }
};
export default reducer;