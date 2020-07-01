import { ALBUMS, PHOTOS } from '../constants';

// Albums
const loadAlbums = ({ data, dispatch }) => {
    console.log('in loadAlbums action');
    dispatch({ type: ALBUMS.LOAD, data })
};
const setAlbums = albums => ({
    type: ALBUMS.LOAD_SUCCESS,
    albums,
});
const setAlbumsLoadError = error => ({
    type: ALBUMS.LOAD_FAIL,
    error,
});
const addNewAlbum = ({ data, dispatch }) => {
    console.log('in addNewAlbum action');
    dispatch({ type: ALBUMS.ADD_NEW_ALBUM, data })
};
const resetMessages = ({ data, dispatch }) => {
    dispatch({ type: ALBUMS.RESET_MESSAGES, data })
}
const deleteAlbum = ({ data, dispatch }) => {
    dispatch({ type: ALBUMS.DELETE_ALBUM, data })
}
const editAlbum = ({ data, dispatch }) => {
    dispatch({ type: ALBUMS.EDIT_ALBUM, data })
}

// Photos
const loadAlbumsPhotos = ({ data, dispatch }) => {
    console.log('in loadPhotos action');
    console.log(data);
    dispatch({ type: PHOTOS.LOAD, data })
};
const setAlbumsPhotos = (id, downloads) => ({
    type: PHOTOS.LOAD_SUCCESS,
    id,
    downloads,
});
const setAlbumsPhotosLoadError = id => ({
    type: PHOTOS.LOAD_FAIL,
    id,
});
const uploadPhotos = ({ data, dispatch }) => {
    console.log('in uploadPhotos action');
    dispatch({ type: PHOTOS.UPLOAD_PHOTOS, data })
};
const clearPhotos = ({ data, dispatch }) => {
    dispatch({ type: PHOTOS.CLEAR_PHOTOS, data })
}
const resetPhotosMessages = ({ data, dispatch }) => {
    dispatch({ type: PHOTOS.RESET_MESSAGES, data })
}
export {
    loadAlbums,
    setAlbums,
    setAlbumsLoadError,
    resetMessages,
    addNewAlbum,
    deleteAlbum,
    editAlbum,
    loadAlbumsPhotos,
    setAlbumsPhotos,
    setAlbumsPhotosLoadError,
    uploadPhotos,
    clearPhotos,
    resetPhotosMessages
};
