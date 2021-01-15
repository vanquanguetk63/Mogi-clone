import React from "react";
import "../search/Search.css";

function Search(props) {


  return (
    // <input
    //       type="text"
    //       class="form-control"
    //       placeholder="Từ khóa, Đường, Quận hoặc địa danh"
    //     />
    //     <div className="input-group-append">
    //       <button
    //         className={props.name !== "" ? props.name : "btn btn-default"}
    //         type="submit"
    //       >
    //         <i className="fa fa-search"></i>
    //       </button>
    //     </div>
    <div className="input-group mb-3">
    <input type="text" class="form-control" placeholder="Từ khóa, Đường, Quận hoặc địa danh" />
    <div className="input-group-append">
      <button  className= {props.name !== '' ? props.name : "btn btn-default"} type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>
  );
} 

export default Search;
