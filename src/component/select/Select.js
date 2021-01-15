import React from "react";
import "../select/Select.css";

function Select(props) {
  return (
    <div class="dropdown">
      {/* <button
        class="btn btn-default dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Image Droprdown
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a href="#">
            <img
              src="http://www.thisisanfield.com/images/flat_web_icon_set/color/Facebook.png"
              width="17px"
            />
            Facebook
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="http://www.atmospherehotelsandresorts.com/images/icon-twitter.png"
              width="17px"
            />
            Twitter
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://cdn1.iconfinder.com/data/icons/thincons/100/menu-128.png"
              width="17px"
            />
            List Image
          </a>
        </li>
      </ul> */}
      <div >
        <select  className="custom-select" style={{width:150}}>
          <option value="0">Toàn quốc</option>
          <option value="1">Audi</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
