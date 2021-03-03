import axios from 'axios';
import constant from './constant';

async function GetToRent() {
    let url = constant.URL_API + '/rent';
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
    let url = constant.URL_API + '/rent/image';
  
    await axios.post(url, {data: data})
    .then(response => {
        data = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return data;
}

async function GetToRentLimit() {
    let url = constant.URL_API + '/rent/5';
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
    GetToRent,
    GetImageById,
    GetToRentLimit
}
