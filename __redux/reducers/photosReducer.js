import { PHOTOS } from '../constants';


const photosReducer = (state = { photos: [], url: 'firstLoad', isLoading: false, successMessage: '', errorMessage: '' }, action) => {
    switch (action.type) {
        case PHOTOS.START_ISLOADING:
            return { ...state, isLoading: true };
            break
        case PHOTOS.STOP_ISLOADING:
            return { ...state, isLoading: false };
            break
        case PHOTOS.LOAD_SUCCESS:
            let ProssesingPhotos = [...state.photos]
            action.images.results.forEach(element => {
                if (!state.photos.includes(element)) {
                    ProssesingPhotos.push(element)
                }
            });
            return { ...state, photos: ProssesingPhotos, url: action.images.next };
            break;
        case PHOTOS.CLEAR_PHOTOS:
            console.log('photos in reducer has been cleared');
            return { ...state, photos: [], url: 'firstLoad' };
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
