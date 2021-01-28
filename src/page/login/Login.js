import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import user from "../../api/user";
import "../login/Login.css";
const axios = require("axios");

function Login(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [msgValidation, setMsgValidation] = useState("");

  var msg = {};

  const isLogin = (response) => {
    props.islogin(response);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.phoneNumber = phoneNumber;
    data.password = password;
    user.Login(data)
    .then(response => {
      if (response.length > 0) {
        setMsgValidation('');
        isLogin(response);
      } else {
        setMsgValidation('Tài khoản hoặc mật khẩu sai.');
      }

    })
    .catch(error => console.log(error));
  };

  if (props.data.isLogin === true ) {
    return <Redirect to='/'></Redirect>
  } else {
    return (
      <div>
        <div className="login-form">
          <div className="panel">
            <div className="panel-header">
              <div className="login select">
                <p>Đăng nhập</p>
              </div>
            </div>
  
            <div className="panel-body">
              <br />
              <form
                action="http://localhost:8080/api/user/post"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="input-icons mb-2">
                  <i className="fas fa-phone-square icon"></i>
                  <input
                    className="textfield"
                    name="phone"
                    value={phoneNumber}
                    type="text"
                    placeholder="Số điện thoại"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </div>
  
                <div className="input-icons">
                  <i className="fas fa-lock icon "></i>
                  <input
                    className="textfield"
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <br />
                  <span className="err">{msgValidation}</span>
  
                </div>
  
                <button className="btn-custom btn-login mt-3" onClick={handleSubmit.bind(this)}>
                  Đăng nhập <i className="fas fa-angle-right"></i>
                </button>
              </form>
  
              <Link to="/signup">
                <div>
                  <button className="btn-custom btn-signup mt-3">
                    Đăng ký <i className="fas fa-angle-right ml-3"></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
