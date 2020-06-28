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

// Photos
const loadAlbumsPhotos = id => ({
    type: PHOTOS.LOAD,
    id,
});

const setAlbumsPhotos = (id, downloads) => ({
    type: PHOTOS.LOAD_SUCCESS,
    id,
    downloads,
});

const setAlbumsPhotosLoadError = id => ({
    type: PHOTOS.LOAD_FAIL,
    id,
});

export {
    loadAlbums,
    setAlbums,
    setAlbumsLoadError,
    loadAlbumsPhotos,
    setAlbumsPhotos,
    setAlbumsPhotosLoadError,
};
