import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setAlbums, setAlbumsPhotosLoadError } from '../actions';
import { PHOTOS } from '../constants';
import { getAlbumsPhotos } from '../api/index';

// export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        console.log('handleImagesLoad called');
        
        // const page = yield select(getPage);
        const page = 1;
        const images = yield call(getAlbumsPhotos, page);
        yield put(setAlbums(images));
    } catch (error) {
        yield put(setAlbumsPhotosLoadError(error.toString()));
    }
}

export default function* watchImagesLoad() {    
    yield takeEvery(PHOTOS.LOAD, handleImagesLoad);
}
