import axios from 'axios';

async function GetToRent() {
    let url = 'http://localhost:8080/api/rent';
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
    let url = 'http://localhost:8080/api/rent/image';
  
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
    let url = 'http://localhost:8080/api/rent/5';
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
