import { AUTH } from '../constants';
import { saveUser } from '../../src/utils/database/userData';

const SaveUserInfo = async user => {
    try {
        await saveUser(user).then(
            console.log('save user ok')
        );
    } catch (error) {
        console.log('save user failed')
    }
};

const loginReducer = (state = { token: '' }, action) => {

    switch (action.type) {
        case AUTH.LOGIN_SUCCESS:

            console.log('in reducer :');

            console.log(action);
            const loginModel = {
                username: action.data.data.username,
                password: action.data.data.password,
                remember: action.data.data.remember,
                token: action.data.token
            }
            SaveUserInfo(loginModel)
            return { ...state, user: loginModel };

            break;
        case AUTH.LOGIN_FAILURE:
            console.log('login failed');
            return state
            break;
        case AUTH.SET_USER:
            console.log('setuser reducer');
            console.log(action);

            const model = {
                username: action.data.username,
                password: action.data.password,
                remember: action.data.remember,
                token: action.data.token
            }
            console.log(model);
            return { ...state, user: model };
            return state
            break;
        case AUTH.LOGOUT:
            return { ...state, user: {} };
            break
        default:
            return state
            break;
    }
};

export default loginReducer;