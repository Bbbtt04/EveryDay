import * as actionTypes from "./constants";

const defaultState = {
  counter: 100,
  category: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return {
        counter: state.counter + action.value
      };
    case actionTypes.SUB_NUMBER:
      return {
        counter: state.counter - action.value
      };
    case actionTypes.GET_CATEGORY:
      return {
        category: action.value
      };
    default:
      return state;
  }
}

export default reducer;
