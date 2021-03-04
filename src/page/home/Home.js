import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import addess from "../../api/addess";
import type from "../../api/type";
import List from "../../component/list/List";
import Search from "../../component/search/Search";
import home from "../../img/home.jpg";
import "../home/Home.css";

const priceForBuy = [
  { id: 1, value: 500000000, name: " < 500 triệu" },
  { id: 2, value: 1000000000, name: " < 1 tỷ" },
  { id: 3, value: 2000000000, name: " < 2 tỷ" },
  { id: 4, value: 5000000000, name: " < 5 tỷ" },
  { id: 5, value: 1000000000, name: " < 10 tỷ" },
];

const priceForRent = [
  { id: 1, value: 1000000, name: " < 1 triệu" },
  { id: 2, value: 2000000, name: " < 2 triệu" },
  { id: 3, value: 3000000, name: " < 3 triệu" },
  { id: 4, value: 4000000, name: " < 4 triệu" },
  { id: 5, value: 5000000, name: " < 5 triệu" },
];

var listProvince = [];
var listType1 = [];
var listType2 = [];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      purpose: 1,
      idProvince: 0,
      idType: 0,
      price: 0,
    };
  }

  componentDidMount() {
    addess
      .GetByProvince()
      .then((response) => {
        listProvince = response;
      })
      .catch(console.error());
    type
      .GetTypeByID(this.state.purpose)
      .then((response) => {
        listType1 = response;
      })
      .catch(console.error());

    type
      .GetTypeByID(this.state.purpose + 1)
      .then((response) => {
        listType2 = response;
      })
      .catch(console.error());
  }

  SetPurpose(value) {
    this.setState({
      purpose: value,
    });
  }

  SetSearch(value) {
    this.setState({
      search: value,
    });
  }

  Search() {
    if (this.state.purpose === '1' ) {
      this.props.history.push({
        pathname: "/buy/search",
        state: this.state,
      });
    } else {
      this.props.history.push({
        pathname: "/rent/search",
        state: this.state,
      });
    }

  }

  render() {
    return (
      <div>
        <div className="search-container">
          <img className="home-img" src={home} alt=""></img>
          <div className="home">
            <div className="home-content">
              <p>Đúng nhà, đúng thời điểm</p>
              <div className="search-menu">
                <ul className="nav justify-content-center mt-2 mb-3">
                  <div
                    className={
                      this.state.purpose === 1
                        ? "nav-item mr-5 custom-mark"
                        : "nav-item mr-5"
                    }
                    onClick={() => this.SetPurpose(1)}
                  >
                    <a style={{ cursor: "pointer" }}>Mua</a>
                  </div>
                  <li
                    className={
                      this.state.purpose === 2
                        ? "nav-item mr-5 custom-mark"
                        : "nav-item mr-5"
                    }
                    onClick={() => this.SetPurpose(2)}
                  >
                    <a style={{ cursor: "pointer" }}>Thuê</a>
                  </li>
              
                </ul>
                <div className="search-home">
                  <Search
                    PassValue={this.SetSearch.bind(this)}
                    PassEvent={this.Search.bind(this)}
                  />
                </div>
                <ul className="nav justify-content-center mt-2">
                  <div className="mr-1">
                    <select
                      className="custom-select"
                      style={{ width: 150 }}
                      onChange={(event) =>
                        this.setState({ idProvince: event.target.value })
                      }
                    >
                      <option value="0">Tỉnh/TP</option>
                      {listProvince.length !== undefined
                        ? listProvince.map((obj, index) => {
                            return (
                              <option key={obj.id} value={obj.id}>
                                {" "}
                                {obj._name}
                              </option>
                            );
                          })
                        : ""}
                    </select>
                  </div>
                  <div className="mr-1">
                    <select
                      className="custom-select"
                      style={{ width: 150 }}
                      onChange={(event) =>
                        this.setState({ idType: event.target.value })
                      }
                    >
                      <option value="0">Loại BĐS</option>
                      {this.state.purpose === 1
                        ? listType1.map((obj, index) => {
                            return (
                              <option key={obj.idType} value={obj.idType}>
                                {" "}
                                {obj.nameType}
                              </option>
                            );
                          })
                        : listType2.map((obj, index) => {
                            return (
                              <option key={obj.idType} value={obj.idType}>
                                {" "}
                                {obj.nameType}
                              </option>
                            );
                          })}
                    </select>
                  </div>
                  <div className="mr-1">
                    <select
                      className="custom-select"
                      style={{ width: 150 }}
                      onChange={(event) =>
                        this.setState({ price: event.target.value })
                      }
                    >
                      <option value="0">Giá cả</option>
                      {this.state.purpose === 1
                        ? priceForBuy.map((obj, index) => {
                            return (
                              <option key={obj.id} value={obj.value}>
                                {" "}
                                {obj.name}
                              </option>
                            );
                          })
                        : priceForRent.map((obj, index) => {
                            return (
                              <option key={obj.id} value={obj.value}>
                                {" "}
                                {obj.name}
                              </option>
                            );
                          })}
                    </select>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-2">
          <List title='Bất động sản cần bán' purpose='1'/>
          <br />
          <List title='Bất động sản cho thuê' purpose='2'/>
        </div>

        <br />
      </div>
    );
  }
}

export default withRouter(Home);
