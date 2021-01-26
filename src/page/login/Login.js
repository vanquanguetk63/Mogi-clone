import { useState } from "react";
import { Link } from "react-router-dom";
import "../login/Login.css";
const axios = require("axios");

function Login(props) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [msgValidation, setMsgValidation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8080/api/user/login', {
      phone: phone,
      password: password,
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
  };

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
                  value={phone}
                  type="text"
                  placeholder="Số điện thoại"
                  onChange={(e) => setPhone(e.target.value)}
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
              </div>

              <button className="btn-custom btn-login mt-3">
                {" "}
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

export default Login;
