import logo from "../../img/logo.svg";
import React, { Component } from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";
import DelayLink from "../delay/DelayLink";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isLogin = this.props.data.isLogin;

    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-sm">
          <a className="navbar-brand" href="/">
            <img className="mogi-logo" src={logo} alt=""></img>
          </a>
          <div style={{ flexGrow: 1 }}></div>
          <ul className="navbar-nav mr-3">
            <li className="nav-item">
              <a className="nav-link" href="/buy">
                {" "}
                Mua nhà
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rent">
                Thuê nhà
              </a>
            </li>
           
          </ul>

          <div style={{ flexGrow: 0 }}></div>

          {isLogin === true ? (
            <>
              <button
                className="btn-custom btn-profile mr-3"
                onClick={() => this.props.history.push("/profile/edit")}
              >
                <i className="fas fa-user-circle"></i>{" "}
                {this.props.data.currentUser[0].nameUser}
              </button>
              <Link to="/profile/post">
                <button className="btn-custom btn-post">Đăng tin</button>
              </Link>
            </>
          ) : (
            <Link to={"/Login"}>
              <button className="btn-custom btn-login mr-3">Đăng nhập</button>
            </Link>
          )}
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
