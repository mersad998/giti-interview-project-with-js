import { ALBUMS } from '../constants';

const albumsReducer = (state = [], action) => {
    if (action.type === ALBUMS.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default albumsReducer;
