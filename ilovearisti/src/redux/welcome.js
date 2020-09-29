import * as ActionTypes from './ActionTypes';

export const Welcome = (
  state = {
    isLoading: true,
    errMess: null,
    welcome: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_WELCOME:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        welcome: action.payload,
      };

    case ActionTypes.WELCOME_LOADING:
      return { ...state, isLoading: true, errMess: null, welcome: [] };

    case ActionTypes.WELCOME_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        welcome: [],
      };

    default:
      return state;
  }
};
