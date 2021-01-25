import React, { Component } from "react";
import "../home/Home.css";
import home from "../../img/home.jpg";
import Search from "../../component/search/Search";
import Select from "../../component/select/Select";
import List from "../../component/list/List";

class Home extends Component {
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
                  <li className="nav-item mr-5">
                    <a style={{cursor:'pointer'}} href="#">Mua</a>
                  </li>
                  <li className="nav-item mr-5">
                    <a style={{cursor:'pointer'}} href="#">Thuê</a>
                  </li>
                  <li className="nav-item mr-5">
                    <a href="#">Giá thuê đất</a>
                  </li>
                </ul>
                <div className="search-home">
                  <Search  name="btn btn-primary"/>
                </div>
                <ul className="nav justify-content-center mt-2">
                  <div className="mr-1">
                    <Select/>
                  </div>
                  <div className="mr-1">
                    <Select/>
                  </div>
                  <div className="mr-1">
                    <Select/>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
           <List/> 
           <br/>
           <List/> 
        </div>
        
        <br/>
      </div>
    );
  }
}

export default Home;
