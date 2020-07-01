import { ALBUMS } from '../constants';

const albumsReducer = (state = { albums: [], successMessage: '', errorMessage: '', isLoading: false }, action) => {

    switch (action.type) {
        case ALBUMS.START_ISLOADING:
            return { ...state, isLoading: true };
            break
        case ALBUMS.STOP_ISLOADING:
            return { ...state, isLoading: false };
            break

        case ALBUMS.LOAD_SUCCESS:
            console.log('in reducer :');
            console.log(action);
            return { ...state, albums: action.images };
            break;

        case ALBUMS.ADD_NEW_ALBUM_SUCCESS:
            return { ...state, successMessage: 'آلبوم با موفقیت ایجاد شد' };
            break;

        case ALBUMS.ADD_NEW_ALBUM_FAILED:
            if (action.error.message === 'Request failed with status code 500') {
                return { ...state, errorMessage: 'نام آلبوم تکراریست . لطفا از نام دیگری استفاده نمایید' };
            } else {
                return { ...state, errorMessage: 'خطایی در ایجاد آلبوم . لطفا دوباره تلاش نمایید' };
            }
            break;

        case ALBUMS.RESET_MESSAGES:
            return { ...state, errorMessage: '', successMessage: '' };
            break;

        default:
            return state
            break;
    }
};

export default albumsReducer;
