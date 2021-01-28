import axios from "axios";

/**
 * Lấy dữ liệu bằng số điện thoại
 * @param {} phone 
 */
async function SearchByPhone(phone) {
  var isExist = false;
  if (phone !== "") {
    var url = "http://localhost:8080/api/user/search?phone=" + phone;
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
  var url = "http://localhost:8080/api/user/signup";
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
  var url = "http://localhost:8080/api/user/login";
  await axios
  .post(url, {data: data})
  .then((response) => {
    status = response.data;
  })
  .catch((error) => console.log(error));
  return status;
}

export default {
  SearchByPhone,
  SignUp,
  Login
};
