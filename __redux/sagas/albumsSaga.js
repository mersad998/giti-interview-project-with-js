import { put, call, takeEvery, takeLatest, select } from 'redux-saga/effects';

import { setAlbums, setAlbumsLoadError } from '../actions';
import { ALBUMS } from '../constants';
import { getAllAlbums, addNewAlbumApi } from '../api/index';

export const getToken = state => state.loginReducer.user.token;

export function* handleAlbumsLoad() {
    try {
        console.log('handleAlbumsLoad in saga called');
        yield put({ type: ALBUMS.START_ISLOADING });
        const JWTtoken = yield select(getToken);
        console.log(JWTtoken);
        const images = yield call(getAllAlbums, JWTtoken);
        console.log('images in saga :' + images);
        console.log(images);
        yield put({ type: ALBUMS.STOP_ISLOADING });
        yield put({ type: ALBUMS.LOAD_SUCCESS, images });
    } catch (error) {
        yield put({ type: ALBUMS.STOP_ISLOADING });
        // should handle errors
    }
}

export function* handleAddNewAlbum(data) {
    try {
        yield put({ type: ALBUMS.START_ISLOADING });
        console.log('handleAddNewAlbum in saga called');
        const JWTtoken = yield select(getToken);
        data.token = JWTtoken
        const result = yield call(addNewAlbumApi, data);
        yield put({ type: ALBUMS.STOP_ISLOADING });
        yield put({ type: ALBUMS.ADD_NEW_ALBUM_SUCCESS });
    } catch (error) {
        yield put({ type: ALBUMS.STOP_ISLOADING });
        yield put({ type: ALBUMS.ADD_NEW_ALBUM_FAILED, error });
    }
}


export default function* watchImagesLoad() {
    yield takeEvery(ALBUMS.LOAD, handleAlbumsLoad);
    yield takeEvery(ALBUMS.ADD_NEW_ALBUM, handleAddNewAlbum);
}
