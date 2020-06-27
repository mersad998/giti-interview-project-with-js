import { PHOTOS } from '../constants';

const photosReducer = (state = [], action) => {
    if (action.type === PHOTOS.PHOTOS) {
        return [...state, ...action.images];
    }
    return state;
};

export default photosReducer;
