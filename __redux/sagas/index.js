import { all } from 'redux-saga/effects';

import albumsSaga from './albumsSaga';
import photosSaga from './photosSaga';

export default function* rootSaga() {
    try {
        yield all([albumsSaga(), photosSaga()]);
    } catch (e) {
        console.error(e);
    }
}
