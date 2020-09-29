import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (imageId, rating, author, comment) => (dispatch) => {
  const newComment = {
    imageId: imageId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log('post comments', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
    });
};

export const fetchImages = () => (dispatch) => {
  dispatch(imagesLoading());
  return fetch(baseUrl + 'image_gallery')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((images) => dispatch(addImages(images)))
    .catch((error) => dispatch(imagesFailed(error.message)));
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

// Comments
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

//Welcome
export const fetchWelcome = () => (dispatch) => {
  dispatch(welcomeLoading());
  return fetch(baseUrl + 'welcome')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((welcome) => dispatch(addWelcome(welcome)))
    .catch((error) => dispatch(welcomeFailed(error.message)));
};

export const welcomeLoading = () => ({
  type: ActionTypes.WELCOME_LOADING,
});

export const welcomeFailed = (errmess) => ({
  type: ActionTypes.WELCOME_FAILED,
  payload: errmess,
});

export const addWelcome = (welcome) => ({
  type: ActionTypes.ADD_WELCOME,
  payload: welcome,
});

//River
export const fetchRiver = () => (dispatch) => {
  dispatch(riverLoading());

  return fetch(baseUrl + 'river')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((river) => dispatch(addRiver(river)))
    .catch((error) => dispatch(riverFailed(error.message)));
};

export const riverLoading = () => ({
  type: ActionTypes.RIVER_LOADING,
});

export const riverFailed = (errmess) => ({
  type: ActionTypes.RIVER_FAILED,
  payload: errmess,
});

export const addRiver = (river) => ({
  type: ActionTypes.ADD_RIVER,
  payload: river,
});

//Vikos
export const fetchVikos = () => (dispatch) => {
  dispatch(vikosLoading());

  return fetch(baseUrl + 'vikos')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((vikos) => dispatch(addVikos(vikos)))
    .catch((error) => dispatch(vikosFailed(error.message)));
};

export const vikosLoading = () => ({
  type: ActionTypes.VIKOS_LOADING,
});

export const vikosFailed = (errmess) => ({
  type: ActionTypes.VIKOS_FAILED,
  payload: errmess,
});

export const addVikos = (vikos) => ({
  type: ActionTypes.ADD_VIKOS,
  payload: vikos,
});
