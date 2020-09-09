import { FILTER_CHANGING, FILTER_CLEAR } from '../actions/types';

const initialState = {
    conditions: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FILTER_CHANGING:
      return {
        conditions: action.payload,
      };
      
    case FILTER_CLEAR:
      return {
          conditions: {}
      };

    default:
      return state;
  }
}