import axios from "axios";
import constant from "./constant";

/**
 * Lấy dữ liệu bằng số điện thoại
 * @param {} phone 
 */
async function SearchByPhone(phone) {
  var isExist = false;
  if (phone !== "") {
    var url = constant.URL_API + "/user/search?phone=" + phone;
    await axios
      .get(url)
      .then((response) => (isExist = response.data))
      .catch((error) => console.log(error));
  }
  return isExist;
}

/**
 * Post đăng kí
 * @param {} data 
 */
async function SignUp(data) {
  let status = "";
  var url = constant.URL_API + "/user/signup";
  await axios
    .post(url, { data: data })
    .then((response) => {
      status = response.data;
    })
    .catch((error) => console.log(error));
  return status;
}

/**
 * Đăng nhập
 * @param {*} data 
 */
async function Login(data) {
  let status = {};
  var url = constant.URL_API + "/user/login";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function LoginAdmin(data) {
  let status = {};
  var url = "http://localhost:8080/api/user/admin";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function GetNotApprovedPostByIDUser(data) {
  let status = {};
  var url = "http://localhost:8080/api/user/0";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function GetApprovedPostByIDUser(data) {

  let status = {};
  var url = "http://localhost:8080/api/user/1";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function GetIsApprovingPostByIDUser(data) {
  let status = {};
  var url = "http://localhost:8080/api/user/2";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function GetFavorite(data) {
  let status = {};
  var url = "http://localhost:8080/api/user/favorite";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function SaveToFavorite(data) {
  let status = {};
  var url = "http://localhost:8080/api/user/add";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function DeleteFromFavorite(data) {
  let status = {};
  var url = "http://localhost:8080/api/user/delete";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

async function CheckIdIsFavorite(data) {
  let status = {};
  var url = "http://localhost:8080/api/user/getfavorite";
  await axios
  .post(url, {data: data})
  .then((response) => {
      status = response;
    
  })
  .catch((error) => console.log(error));
  return status;
}

export default {
  SearchByPhone,
  SignUp,
  Login,
  GetApprovedPostByIDUser,
  GetNotApprovedPostByIDUser,
  GetIsApprovingPostByIDUser,
  GetFavorite,
  SaveToFavorite,
  DeleteFromFavorite,
  CheckIdIsFavorite,
  LoginAdmin
};
