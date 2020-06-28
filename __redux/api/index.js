import axios from 'axios'
import { loginUrl, getAllAlbumsUrl } from './urls'

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
                // CheckResponse(res, resolve, reject);
            })
            .catch(err => {
                console.log('err in api');
                reject(err)
                // CheckResponse(err, resolve, reject);
            });
    });
};


const CheckResponse = (res, resolve, reject) => {
    console.log('state 3');
    console.log(res);

    // switch (res.status) {
    //     case 200:
    //         resolve(res.data);
    //     case 404:
    //         reject(res);
    //         throw 'صفحه مورد نظر وجود ندارد';
    //     case 401:
    //         reject(res);
    //         throw 'شما به این متد دسترسی ندارید';
    //     case 500:
    //         reject(res);
    //         return;
    //     default:
    //         reject(res);
    //         throw 'خطای نامشخص در برقراری ارتباط با سرور رخ داده است';
    // }
};

export const getAlbumsPhotos = () => {
    // make axios call
    console.log('getAlbumsPhotos called');

    return ['img1', 'img2']
}
