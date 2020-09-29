import { IMAGE_GALLERY } from '../shared/image_gallery';
import { COMMENTS } from '../shared/comments';
import { WELCOME } from '../shared/welcome';
import { RIVER } from '../shared/river';
import { VIKOS } from '../shared/vikos';

export const initialState = {
  image_gallery: IMAGE_GALLERY,
  comments: COMMENTS,
  welcome: WELCOME,
  river: RIVER,
  vikos: VIKOS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
