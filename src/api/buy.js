import axios from 'axios';
import constant from './constant';

async function GetToBuy() {
    let url = constant.URL_API + '/buy';
    let data;
    await axios.get(url)
    .then(response => {
        data = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return data;
}

async function GetImageById(data) {
    let url = constant.URL_API + '/buy/image';
  
    await axios.post(url, {data: data})
    .then(response => {
        data = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return data;
}

async function GetToBuyLimit() {
    let url = constant.URL_API + '/buy/5';
    let data;
    await axios.get(url)
    .then(response => {
        data = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return data;
}

export default {
    GetToBuy,
    GetImageById,
    GetToBuyLimit
}
