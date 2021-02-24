import React, { Component } from "react";
import Item from "../../component/item/Item";
import SearchControl from "../../component/search-control/SearchControl";
import "../buy/Buy.css";
import ads from "../../img/right.jpg";
import Filter from "../../component/filter/Filter";
import buy from "../../api/buy";
import { withRouter } from "react-router-dom";
import Search from "../../component/search/Search";
import search from "../../api/search";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [],
    };
  }

  componentDidMount() {
    // console.log(this.props.location.state);
    // call api
    buy
      .GetToBuy()
      .then((response) => {
        this.setState({
          listItem: response,
        });
      })
      .catch(console.error());
  }

  // componentDidUpdate(prevProps, prevState, snapShot)() {

  // }

  Search(data) {
    if (
      data.search === "" &&
      data.idProvince === 0 &&
      data.idType === 0 &&
      data.price === 0
    ) {
      buy
        .GetToBuy()
        .then((response) => {
          this.setState({
            listItem: response,
          });
        })
        .catch(console.error());
    } else {
      search
        .Search(data)
        .then((response) => {
          this.setState({
            listItem: response,
          });
          console.log(response);
        })
        .catch(console.error());
    }
  }

  render() {
    var elmItem = {};
    if (this.state.listItem !== undefined) {
      elmItem = this.state.listItem.map((obj) => {
        return <Item data={obj} />;
      });
    }

    return (
      <>
        <div className="container py-3">
          <div className="control-search">
            <SearchControl
              PassEvent={this.Search.bind(this)}
              purpose="1"
              data={this.props.data}
            />
          </div>

          <div className="row content-buy">
            <div className="col-12 col-md-8">
              <div className="result">
                <div className="ml-2">1 - 15 trong 100.000 kết quả</div>
              </div>

              <div className="mt-3">{elmItem}</div>
            </div>

            <div className="col-0 col-md-4 right">
              <div>
                <img className="img-buy" src={ads} alt=""></img>
              </div>
              <Filter />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Buy);
