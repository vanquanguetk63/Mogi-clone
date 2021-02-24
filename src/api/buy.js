import axios from 'axios';

async function GetToBuy() {
    let url = 'http://localhost:8080/api/buy';
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
    let url = 'http://localhost:8080/api/buy/image';
  
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
    let url = 'http://localhost:8080/api/buy/5';
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
