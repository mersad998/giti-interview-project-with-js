import axios from 'axios'
import { loginUrl, signUpUrl, getAllAlbumsUrl, selectAlbumUrl } from './urls'

export const LoginApi = (data) => {
    return new Promise(async (resolve, reject) => {
        axios
            .post(loginUrl, {
                username: data.data.username,
                password: data.data.password
            })
            .then(res => {
                console.log('status 200');
                console.log(res.data);
                resolve(res.data.token);
            })
            .catch(err => {
                console.log('err in api');
                console.log(err);
                reject(err);
            });
    });
};
export const SignupApi = (data) => {
    console.log('in SignupApi :');
    console.log(data.data);

    return new Promise(async (resolve, reject) => {
        axios
            .post(signUpUrl, {
                username: data.username,
                email: data.email,
                password: data.password
            })
            .then(res => {
                console.log('status 200');
                console.log(res.data);
                resolve(res.data);
            })
            .catch(err => {
                console.log('err in api');
                console.log(err);
                reject(err);
            });
    });
};
export const getAllAlbums = (token) => {
    console.log('JWT ' + token);
    return new Promise(async (resolve, reject) => {
        await axios
            .get(getAllAlbumsUrl, {
                headers: {
                    Authorization: 'JWT ' + token,
                },
            })
            .then(res => {
                console.log('status 200');
                resolve(res.data)
            })
            .catch(err => {
                console.log('err in api');
                reject(err)
            });
    });
};
export const addNewAlbumApi = (data) => {
    console.log(data);

    const token = 'JWT ' + data.token;
    const url = getAllAlbumsUrl;
    console.log(url, token);

    return new Promise(async (resolve, reject) => {
        await axios
            .post(url, { name: data.data }, {
                headers: {
                    Authorization: token,
                },
            })
            .then(res => {
                console.log('status 200');
                resolve(res.data)
            })
            .catch(err => {
                console.log('err in api');
                reject(err)
            });
    });
};
export const getPhotosOfAnAlbum = (data) => {
    console.log(data);
    let url;
    if (!data.url) {
        console.log('endOfPage');
        return
    }
    if (data.url === 'firstLoad') {
        url = selectAlbumUrl + data.data + '/pictures';
    } else {
        console.log('now in api we have new url');
        url = data.url
        console.log(data.url);
    }
    const token = 'JWT ' + data.token
    return new Promise(async (resolve, reject) => {
        await axios
            .get(url, {
                headers: {
                    Authorization: token,
                },
            })
            .then(res => {
                console.log('status 200');
                console.log(res.data);
                resolve(res.data)
            })
            .catch(err => {
                console.log('err in api');
                reject(err)
            });
    });
};
export const uploadPhotoApi = async (data) => {
    const token = 'JWT ' + data.token;
    const url = selectAlbumUrl + data.data.albumName + '/pictures';
    console.log('in api :');
    console.log(data);

    let formData = new FormData();
    formData.append('title', data.data.title);
    formData.append('desc', data.data.desc ? data.data.desc : '')
    let localUri = data.data.path;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : 'image';
    console.log(formData);

    formData.append('img', {
        uri: localUri,
        name: filename,
        type,
    });

    return new Promise(async (resolve, reject) => {
        await axios
            .post(url, formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                    Authorization: token,
                },
            })
            .then(res => {
                console.log('status 200');
                resolve(res.data)
            })
            .catch(err => {
                console.log('err in api');
                reject(err)
            });
    });
};
export const deleteAnAlbumApi = (data) => {
    const token = 'JWT ' + data.token;
    const url = selectAlbumUrl + data.data
    return new Promise(async (resolve, reject) => {
        await axios
            .delete(url, {
                headers: {
                    Authorization: token,
                },
            })
            .then(res => {
                console.log('status 200');
                resolve(res.data)
            })
            .catch(err => {
                console.log('err in api');
                reject(err)
            });
    });
};
export const editAnAlbumApi = (data) => {
    const token = 'JWT ' + data.token;
    const url = selectAlbumUrl + data.data.prevName;
    return new Promise(async (resolve, reject) => {
        await axios
            .put(url, { name: data.data.newName }, {
                headers: {
                    Authorization: token,
                },
            })
            .then(res => {
                console.log('status 200');
                resolve(res.data)
            })
            .catch(err => {
                console.log('err in api');
                reject(err)
            });
    });
};