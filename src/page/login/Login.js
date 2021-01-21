import React, { useState } from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import "../login/Login.css";

function Login(props) {

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
              <br/>
              <form>
                <div className="input-icons mb-2">
                    <i className="fas fa-phone-square icon"></i>
                    <input className="textfield " type="text" placeholder="Số điện thoại"></input>
                </div>
        
                <div className="input-icons">
                    <i class="fas fa-lock icon "></i>
                    <input className="textfield" type="text" placeholder="Mật khẩu"></input>
                </div>
     
                <button className="btn-custom btn-login mt-3"> Đăng nhập <i class="fas fa-angle-right"></i></button>
              </form>

              <div>
                <button className="btn-custom btn-signup mt-3">Đăng ký <i class="fas fa-angle-right ml-3"></i></button>     
              </div>             
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
