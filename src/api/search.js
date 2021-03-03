import axios from "axios";
import constant from "./constant";

async function Search(data) {
  let arr = [];
  let status = "is loaded";
  if (
    data.search === "" &&
    data.idProvince === 0 &&
    data.idType === 0 &&
    data.price === 0
  ) {
    return status;
  } else {
    let url = constant.URL_API + '/search';
    await axios.post(url, {data: data})
    .then(response => {
        arr = response.data;
    })
    .catch(error => {
        console.log(error);
    })
  }
  return arr;
}

export default {
  Search,
};
