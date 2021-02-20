import axios from 'axios';

async function UploadImagePost(data) {
    let url = 'http://localhost:8080/upload-images';
    let rs = '';
    await axios.post(url, data)
    .then(response => {
        rs = response.data.data;
    })
    .catch(error => {
        console.log(error);
    })
    return rs;
}

export default {
    UploadImagePost
}