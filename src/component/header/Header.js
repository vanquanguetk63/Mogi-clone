import logo from "../../img/logo.svg";
import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-sm">
          <a className="navbar-brand" href="#">
            <img className="mogi-logo" src={logo}></img>
          </a>
          <div style={{ flexGrow: 1 }}></div>
          <ul className="navbar-nav mr-3">
            <li className="nav-item">
              <a className="nav-link" href="/buy-house">
                {" "}
                Mua nhà
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Thuê nhà
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Giá nhà đất
              </a>
            </li>
          </ul>

          <div style={{ flexGrow: 0 }}></div>

          {this.props.currentUser !== "" ? (
            <>
              <button className="btn-custom btn-profile mr-3">
                <i class="fas fa-user-circle"></i> Tran{" "}
              </button>
              <button className="btn-custom btn-post">Đăng tin</button>
            </>
          ) : (
            <Link to={'/Login'}> 
              <button
                className="btn-custom btn-login mr-3"
              >
                Đăng nhập
              </button>
            </Link>
          )}
        </nav>
      </div>
    );
  }
}

export default Header;
