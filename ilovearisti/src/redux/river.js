import * as ActionTypes from './ActionTypes';
export const River = (
  state = {
    isLoading: true,
    errMess: null,
    voidomatis_river: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_RIVER:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        voidomatis_river: action.payload,
      };

    case ActionTypes.RIVER_LOADING:
      return { ...state, isLoading: true, errMess: null, voidomatis_river: [] };

    case ActionTypes.RIVER_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, river: [] };

    default:
      return state;
  }
};
