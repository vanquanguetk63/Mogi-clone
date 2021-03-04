import axios from 'axios';
import constant from './constant';

async function GetHouseByID(id) {
    let url = constant.URL_API + '/house/' + id;
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

async function GetImageById(id) {
    let url = constant.URL_API + '/house/image/' + id;
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
    GetHouseByID,
    GetImageById
}
