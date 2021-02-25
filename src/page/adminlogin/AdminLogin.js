import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import user from "../../api/user";
import "../adminlogin/AdminLogin.css";

const AdminLogin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msgValidation, setMsgValidation] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.email = email;
    data.password = password;
    user
      .LoginAdmin(data)
      .then((response) => {
        if (response.length > 0) {
          setMsgValidation("");
          props.isLogin(response);
          history.push('/admin');
        } else {
          setMsgValidation("Tài khoản hoặc mật khẩu sai.");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="adminlogin">
      <div>
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
                <form action="http://localhost:8080/api/user/admin" method="POST">
                  <div className="input-icons mb-2">
                    <i className="fal fa-envelope icon"></i>
                    <input
                      className="textfield"
                      name="phone"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    ></input>
                  </div>

                  <div className="input-icons">
                    <i className="fas fa-lock icon "></i>
                    <input
                      className="textfield"
                      name="password"
                      type="password"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    <br />
                    <span className="err">{msgValidation}</span>
                  </div>

                  <button className="btn-custom btn-login mt-3" onClick={handleSubmit.bind(this)}>
                    Đăng nhập <i className="fas fa-angle-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
