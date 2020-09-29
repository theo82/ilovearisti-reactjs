import * as ActionTypes from './ActionTypes';
import { IMAGE_GALLERY } from '../shared/image_gallery';
export const addComment = (imageId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    imageId: imageId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchImages = () => (dispatch) => {
  dispatch(imagesLoading(true));

  setTimeout(() => {
    dispatch(addImages(IMAGE_GALLERY));
  }, 2000);
};

export const imagesLoading = () => ({
  type: ActionTypes.IMAGES_LOADING,
});

export const imagesFailed = (errmess) => ({
  type: ActionTypes.IMAGES_FAILED,
  payload: errmess,
});

export const addImages = (images) => ({
  type: ActionTypes.ADD_IMAGES,
  payload: images,
});
