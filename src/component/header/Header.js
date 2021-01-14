import logo from "../../img/logo.svg";
import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-sm">
          <a className="navbar-brand" href="#">
            <img className="mogi-logo" src={logo}></img>
          </a>
          <div style={{flexGrow: 1}}></div>
          <ul className="navbar-nav mr-3">
            <li className="nav-item">
              <a className="nav-link" href="/buy-house"> Mua nhà</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#">Thuê nhà</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Giá nhà đất</a>
            </li>
          </ul>
          
          <div style={{flexGrow: 0}}></div>

          <button className="btn btn-light mr-3"><i class="fa fa-user-circle-o fa-1x" aria-hidden="true"></i> Tran </button>

          <button className="btn btn-primary">Đăng tin</button>
        </nav>
      </div>
    );
  }
}

export default Header;
