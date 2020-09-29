import * as ActionTypes from './ActionTypes';

export const image_gallery = (
  state = { isLoading: true, errMess: null, images: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_IMAGES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        images: action.payload,
      };

    case ActionTypes.IMAGES_LOADING:
      return { ...state, isLoading: true, errMess: null, images: [] };

    case ActionTypes.IMAGES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
