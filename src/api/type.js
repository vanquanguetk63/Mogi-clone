import axios from "axios";
import constant from "./constant";

/**
 * Lấy dữ liệu bảng purpose
 */
async function GetPurpose() {
    let purpose = [];
    let url = constant.URL_API + '/type/';
    await axios.get(url)
    .then(response => {
        purpose = response.data;
    })
    .catch(console.error());
    return purpose;
}

/**
 * Lấy dữ liệu theo id Purpose
 */
async function GetTypeByID(idPurpose) {
    let type = [];
    let url = constant.URL_API + '/type/purpose/' + idPurpose;
    await axios.get(url)
    .then(response => {
        type = response.data;
    })  
    .catch(console.error());
    return type;
}

export default {
    GetPurpose,
    GetTypeByID
}