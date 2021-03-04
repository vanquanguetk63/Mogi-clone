import axios from 'axios';

async function UploadImagePost(data) {
    let url = 'https://mogi-clone-server.herokuapp.com/upload-images';
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