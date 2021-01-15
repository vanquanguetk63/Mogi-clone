import React from "react";
import "../search-control/SearchControl.css";
import Search from "../search/Search"
import Select from "../../component/select/Select";

function SearchControl(props) {
  return (
    <div class="search-control">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <div className="search-to-buy mt-3">
            <Search name="btn btn-primary"/>
            </div>
          </div>
          
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="all-select mr-2">
              <Select/>
            </div>
          </div>
          
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="all-select mr-2">
              <Select/>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="all-select mr-2">
              <Select/>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="all-select mr-2">
              <Select/>
            </div>
          </div>

        
        </div>
    </div>
  );
}

export default SearchControl;
