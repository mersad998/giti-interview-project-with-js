import { combineReducers } from 'redux';

import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    albumsReducer: albumsReducer,
    photosReducer: photosReducer,
    loginReducer: loginReducer,
});

export default rootReducer;
