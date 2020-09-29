import * as ActionTypes from './ActionTypes';

export const Vikos = (
  state = {
    isLoading: true,
    errMess: null,
    vikos_canyon: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_VIKOS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        vikos_canyon: action.payload,
      };

    case ActionTypes.VIKOS_LOADING:
      return { ...state, isLoading: true, errMess: null, vikos_canyon: [] };

    case ActionTypes.VIKOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        vikos_canyon: [],
      };

    default:
      return state;
  }
};
