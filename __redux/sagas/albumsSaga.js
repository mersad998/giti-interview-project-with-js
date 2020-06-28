import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setAlbums, setAlbumsLoadError } from '../actions';
import { ALBUMS } from '../constants';
import { getAllAlbums } from '../api/index';

export const getToken = state => state.loginReducer.user.token;

export function* handleAlbumsLoad() {
    try {
        console.log('here');

        const JWTtoken = yield select(getToken);
        console.log(JWTtoken);

        const images = yield call(getAllAlbums, JWTtoken);
        // yield put(setAlbums(images));
    } catch (error) {
        // yield put(setAlbumsLoadError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(ALBUMS.LOAD, handleAlbumsLoad);
}
