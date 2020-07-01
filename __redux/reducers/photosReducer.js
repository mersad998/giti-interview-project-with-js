import { PHOTOS } from '../constants';


const photosReducer = (state = { photos: [], page: 1, isLoading: false, successMessage: '', errorMessage: '' }, action) => {
    switch (action.type) {
        case PHOTOS.START_ISLOADING:
            return { ...state, isLoading: true };
            break
        case PHOTOS.STOP_ISLOADING:
            return { ...state, isLoading: false };
            break
        case PHOTOS.LOAD_SUCCESS:
            console.log('in reducer :');
            console.log(action);
            return { ...state, photos: action.images.results };
            break;
        case PHOTOS.CLEAR_PHOTOS:
            console.log('photos in reducer has been cleared');
            return { ...state, photos: [] };
            break;
        case PHOTOS.RESET_MESSAGES:
            return { ...state, successMessage: '', errorMessage: '' };
            break;
        case PHOTOS.ADD_PHOTO_SUCCESS:
            return { ...state, successMessage: 'تصویر با موفقیت ذخیره شد' };
            break
        case PHOTOS.ADD_PHOTO_FAILED:
            return { ...state, errorMessage: 'خطایی در ذخیره تصویر . لطفا بعدا تلاش نمایید' };
            break
        default:
            return state
            break;
    }
};

export default photosReducer;
