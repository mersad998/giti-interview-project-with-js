import { put, call, takeEvery, select } from 'redux-saga/effects';
import { PHOTOS } from '../constants';
import { getPhotosOfAnAlbum, uploadPhotoApi } from '../api/index';

export const getPage = state => state.photosReducer.page;
export const getToken = state => state.loginReducer.user.token;

export function* handleImagesLoad(data) {
    try {
        console.log('handleImagesLoad called');
        yield put({ type: PHOTOS.START_ISLOADING });
        data.token = yield select(getToken);
        data.page = yield select(getPage);
        const images = yield call(getPhotosOfAnAlbum, data);
        yield put({ type: PHOTOS.STOP_ISLOADING });
        yield put({ type: PHOTOS.LOAD_SUCCESS, images });
    } catch (error) {
        yield put({ type: PHOTOS.STOP_ISLOADING });
        // should set err
    }
}
export function* handleUploadPhotos(data) {
    try {
        console.log('handleUploadPhotos called');
        yield put({ type: PHOTOS.START_ISLOADING });
        data.token = yield select(getToken);
        const result = yield call(uploadPhotoApi, data);
        yield put({ type: PHOTOS.STOP_ISLOADING });
        yield put({ type: PHOTOS.ADD_PHOTO_SUCCESS });
        console.log('saga ok');
    } catch (error) {
        yield put({ type: PHOTOS.STOP_ISLOADING });
        yield put({ type: PHOTOS.ADD_PHOTO_FAILED });
        console.log('saga failed');
        console.log(error);
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(PHOTOS.LOAD, handleImagesLoad);
    yield takeEvery(PHOTOS.UPLOAD_PHOTOS, handleUploadPhotos);
}
