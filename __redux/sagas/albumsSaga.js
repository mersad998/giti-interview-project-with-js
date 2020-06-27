import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setAlbums, setAlbumsLoadError } from '../actions';
import { ALBUMS } from '../constants';
import { getAllAlbums } from '../api/index';

// export const getPage = state => state.nextPage;

export function* handleAlbumsLoad() {
    try {
        // const page = yield select(getPage);
        const page = 1;
        const images = yield call(getAllAlbums, page);
        yield put(setAlbums(images));
    } catch (error) {
        yield put(setAlbumsLoadError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(ALBUMS.LOAD, handleAlbumsLoad);
}
