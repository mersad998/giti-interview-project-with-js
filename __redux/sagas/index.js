import { all } from 'redux-saga/effects';

import albumsSaga from './albumsSaga';
import photosSaga from './photosSaga';
import userSaga from './authSaga'
import {login} from './authSaga'

export default function* rootSaga() {
    try {
        yield all([albumsSaga(), photosSaga(),login]);
    } catch (e) {
        console.error(e);
    }
}
