import { cardActionTypes } from "./cardActionTypes";

const INITIAL_STATE = {
  count: 0
};

const cardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case cardActionTypes.increment:
      return {
        ...state,
        count: state.count + 1
      };
    case cardActionTypes.decrement:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default cardReducer;
