import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import buy from "../../api/buy";
import search from "../../api/search";
import Item from "../../component/item/Item";
import SearchControl from "../../component/search-control/SearchControl";
import ads from "../../img/right.jpg";
import "../buy/Buy.css";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [],
    };
  }

  componentDidMount() {
    if (this.props.location.pathname.includes("search")) {
      let state = this.props.location.state;
      if (state === undefined) {
        this.props.history.push("/buy");
      } else {
        search
          .Search(state)
          .then((response) => {
            if (response === "is loaded") {
              // call api
              buy
                .GetToBuy()
                .then((response) => {
                  this.setState({
                    listItem: response,
                  });
                })
                .catch(console.error());
            } else {
              this.setState({
                listItem: response,
              });
            }
          })
          .catch(console.error());
      }
    }
    {
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
  }

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
        return <Item state={this.props.data} data={obj} />;
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
              dataSearch={this.props.location.state}
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
              {/* <Filter /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Buy);
