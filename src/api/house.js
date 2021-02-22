import axios from 'axios';

async function GetHouseByID(id) {
    let url = 'http://localhost:8080/api/house/' + id;
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
    let url = 'http://localhost:8080/api/house/image/' + id;
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
