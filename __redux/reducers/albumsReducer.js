import { ALBUMS } from '../constants';

const albumsReducer = (state = { albums: [] }, action) => {
    switch (action.type) {
        case ALBUMS.LOAD_SUCCESS:

            console.log('in reducer :');
            console.log(action);

            return { ...state, albums: action.images };

            break;

        default:
            return state
            break;
    }
};

export default albumsReducer;
