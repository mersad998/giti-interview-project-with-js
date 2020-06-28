import { AUTH } from '../constants';

const requestUserLogin = ({ data, dispatch }) => {
    console.log('in actions :');
    console.log(data, dispatch);
    dispatch({ type: AUTH.LOGIN_REQUEST, data })
};

const setUser = ({ data, dispatch }) => {
    console.log('in set user action :');
    console.log(data, dispatch);
    dispatch({ type: AUTH.SET_USER, data })

};

// const setUserToken = Token => ({
//     type: AUTH.LOGIN_SUCCESS,
//     Token
// });

const setLoginErr = err => ({
    type: AUTH.LOGIN_FAILURE,
    err,
});
const userLogout = ({ data, dispatch }) => {
    console.log('in userLogout action :');
    console.log(data, dispatch);
    dispatch({ type: AUTH.LOGOUT, data })
};


export {
    requestUserLogin,
    setUser,
    setLoginErr,
    userLogout
};
