import { combineReducers } from 'redux';

import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
// import loginReducer from './loginReducer';
// import signUpReducer from './signUpReducer';
// import uploadReducer from './uploadReducer';


const rootReducer = combineReducers({
    albumsReducer: albumsReducer,
    photosReducer: photosReducer,
});



// should copelete to :
// const rootReducer = combineReducers({
//     loginReducer: loginReducer,
//     albumsReducer: albumsReducer,
//     photosReducer: photosReducer,
//     signUpReducer: signUpReducer,
//     uploadReducer: uploadReducer,
// });

export default rootReducer;
