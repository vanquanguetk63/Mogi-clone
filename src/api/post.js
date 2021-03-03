import axios from 'axios';
import constant from './constant';

async function GetNewId() {
    let url = constant.URL_API + '/post/id';
    let id = 0;
    await axios.get(url)
    .then(response => {
        id = response.data[0].id + 1;
    })
    .catch(error => {
        console.log(error);
    })
    return id;
}

async function PostToServer(data) {
    let url = constant.URL_API + '/post';
    let status;
    await axios.post(url, {data: data})
    .then(response => {
        status = response.status;
    }).catch(error => {
        console.log(error);
    })
    return status;
}

async function PostImgToServer(data) {
    let url = constant.URL_API + '/post/image';
    let status;
    await axios.post(url, {data: data})
    .then(response => {
        status = response.status;
    }).catch(error => {
        console.log(error);
    })
    return status;
}

export default {
    GetNewId,
    PostToServer,
    PostImgToServer
}
