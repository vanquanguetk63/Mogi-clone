import axios from "axios";

async function Search(data) {
  let arr = [];
  let status = "is loaded";
  if (
    data.search === "" &&
    data.idProvince === 0 &&
    data.idType === 0 &&
    data.price === 0
  ) {
      console.log('back');
    return status;
  } else {
    let url = 'http://localhost:8080/api/search';
    await axios.post(url, {data: data})
    .then(response => {
        console.log(response);
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
