import {
  CART_CLEAR,
  CART_ADD,
  CART_REMOVE,
  CART_CHECKOUT,
} from "../actions/types";

const initialState = {
  bag: JSON.parse(localStorage.getItem("cart")) || [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: 
      return {
        ...state,
        bag: action.payload,
      };

    case CART_REMOVE: 
      return {
        ...state,
        bag: action.payload,
      };

    case CART_CLEAR:
      return {
        ...state,
        bag: [],
      };

    default:
      return state;
  }
};
