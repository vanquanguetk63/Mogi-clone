import React from "react";
import "../search/Search.css";

function Search(props) {
  const PassValue = (event) => {
    props.PassValue(event.target.value);
  }

  const PassEvent = () => {
    props.PassEvent();
  }

  return (
    <div className="input-group ">
      <input
        type="text"
        className="form-control"
        placeholder="Từ khóa, Đường, Quận hoặc địa danh"
        onChange={PassValue}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit" onClick={PassEvent}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
