import React, { Component } from "react";
import Item from "../../component/item/Item";
import SearchControl from "../../component/search-control/SearchControl";
import "../buy/Buy.css";
import ads from "../../img/right.jpg";
import Filter from "../../component/filter/Filter";

class Buy extends Component {

  componentDidMount() {
    // call api
  }

  render() {
    return (
      <>
        <div className="container py-3">
          <div className="control-search">
            <SearchControl />
          </div>

          <div className="row content-buy">
            <div className="col-12 col-md-8">
              <b>
                <h5>
                  Thuê nhà đất 2021 giá rẻ tại Việt Nam, giá thuê mới nhất
                </h5>
              </b>

              <div className="result">
                <div className="ml-2">1 - 15 trong 100.000 kết quả</div>
              </div>

              <div className="mt-3">
                <Item />
                <Item />
              </div>
            </div>

            <div className="col-0 col-md-4 right">
                <div>
                    <img className="img-buy" src={ads} alt=""></img>
                </div>
                <Filter/>


            </div>
          </div>
        </div>

  
      </>
    );
  }
}

export default Buy;
