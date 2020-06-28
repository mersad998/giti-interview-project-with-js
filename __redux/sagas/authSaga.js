import { put, call, takeEvery, select } from 'redux-saga/effects';
import { setUserToken, setLoginErr } from '../actions/authActions';
import { AUTH } from '../constants';
import { LoginApi } from '../api'

export function* handleLoginRequest(data) {
    try {
        console.log('in saga :')
        console.log(data);

        const token = yield call(LoginApi, data);
        console.log('saga ok');
        console.log(token);
        data.token = token
        yield put({ type: AUTH.LOGIN_SUCCESS, data });
    } catch (error) {
        yield put({ type: AUTH.LOGIN_FAILURE, error });
        console.log('saga fail');
        console.log(error);
    }
}

export const login = takeEvery(AUTH.LOGIN_REQUEST, handleLoginRequest);