import axios from 'axios';


async function GetPostIsApproved() {
    let url = 'http://localhost:8080/api/admin';
    let province = [];
    await axios.get(url)
    .then(response => {
        province = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return province;
}

async function GetPostIsNotApproved() {
    let url = 'http://localhost:8080/api/admin/approve';
    let province = [];
    await axios.get(url)
    .then(response => {
        province = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return province;
}

async function UpdatePost(data) {
    let url = 'http://localhost:8080/api/admin/approve';
    let province = [];
    await axios.post(url, data)
    .then(response => {
        province = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return province;
}

async function DeletePost(data) {
    let url = 'http://localhost:8080/api/admin/delete';
    let province = [];
    await axios.post(url, data)
    .then(response => {
        province = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return province;
}


export default {
    GetPostIsApproved,
    GetPostIsNotApproved,
    UpdatePost,
    DeletePost
}
