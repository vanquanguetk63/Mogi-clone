import axios from 'axios';
import constant from './constant';

/**
 * Lấy danh sách tất cả các tỉnh
 */
async function GetByProvince() {
    let url = constant.URL_API + '/address/province';
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

/**
 * Lấy danh sách các quận/huyện theo id của 1 tỉnh.
 */
async function GetByDistrict(idProvince) {
    let url = constant.URL_API + '/address/province/' + idProvince;
    let district = [];
    await axios.get(url)
    .then(response => {
        district = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return district;
}

/**
 * Lấy danh sách phường, xã theo id của 1 tỉnh và id của quận.
 * @param {*} id 
 */
async function GetByWard(idProvince, idDistrict) {
    let url = constant.URL_API + '/address/province/' + idProvince + '/?district=' + idDistrict;
    let ward = [];
    await axios.get(url)
    .then(response => {
        ward = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return ward;
}

/**
 * Lấy danh sách đường của 1 quận, huyện
 * @param {*} id 
 */
async function GetByStreet(idProvince, idDistrict) {
    let url = constant.URL_API + '/address/province/' + idProvince + '/?district=' + idDistrict + '&ward';
    let street = [];
    await axios.get(url)
    .then(response => {
        street = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    return street;
}



export default {
    GetByProvince,
    GetByDistrict,
    GetByWard,
    GetByStreet
}
