import { createStore, combineReducers, applyMiddleware } from 'redux';
import { image_gallery } from './image_gallery';
import { Comments } from './comments';
import { Welcome } from './welcome';
import { River } from './river';
import { Vikos } from './vikos';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      image_gallery: image_gallery,
      comments: Comments,
      welcome: Welcome,
      river: River,
      vikos: Vikos,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
