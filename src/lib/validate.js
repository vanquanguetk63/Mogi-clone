const validateDay = (time) => {
  let day = time.slice(0, 10);
  day = reverseString(day);
  return day;
};

function reverseString(str) {
  var newString = str.split("-");
  var rvsStr = "";
  for (var i = newString.length - 1; i >= 0; i--) {
    if (i === 0) {
      rvsStr += newString[i];
    } else {
      rvsStr += newString[i] + "/";
    }
  }

  return rvsStr;
}

function getNumberInPost(number) {
  number = number.split('.').join("");

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default  {
    validateDay,
    getNumberWithCommas,
    getNumberInPost
}
