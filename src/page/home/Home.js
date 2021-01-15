import React, { Component } from "react";
import Header from "../../component/header/Header";
import "../home/Home.css";
import home from "../../img/home.jpg";
import Search from "../../component/search/Search";
import Select from "../../component/select/Select";
import List from "../../component/list/List";
import Footer from "../../component/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="search-container">
          <img className="home-img" src={home}></img>
          <div className="home">
            <div className="home-content">
              <p>Đúng nhà, đúng thời điểm</p>
              <div className="search-menu">
                <ul className="nav justify-content-center mt-2 mb-3">
                  <li className="nav-item mr-5">
                    <a>Mua</a>
                  </li>
                  <li className="nav-item mr-5">
                    <a>Thuê</a>
                  </li>
                  <li className="nav-item mr-5">
                    <a>Giá thuê đất</a>
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
          <List/>   
        </div>
        
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;
