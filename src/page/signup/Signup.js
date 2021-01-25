import React from 'react';
import '../signup/Signup.css';

function Signup(props) {
    return (
        <div>
            <div className="signup-form">
        <div className="panel">
          <div className="panel-header">
            <div className="signup select">
              <p>Đăng ký</p>
            </div>
        
          </div>

          <div className="panel-body">
              <br/>
              <form>
                <div className="input-icons mb-2">
                    <i class="fas fa-user icon"></i>
                    <input className="textfield " type="text" placeholder="Họ và tên"></input>
                </div>

                <div className="input-icons mb-2">
                    <i className="fas fa-phone-square icon"></i>
                    <input className="textfield " type="text" placeholder="Số điện thoại"></input>
                </div>
        
                <div className="input-icons mb-2">
                    <i class="fas fa-lock icon "></i>
                    <input className="textfield" type="password" placeholder="Mật khẩu"></input>
                </div>

                <div className="input-icons">
                    <i class="fas fa-lock icon "></i>
                    <input className="textfield" type="password"placeholder="Nhập lại Mật khẩu"></input>
                </div>
                
                <button className="btn-custom btn-signup mt-3">Đăng ký <i class="fas fa-angle-right ml-3"></i></button>     

              </form>       
          </div>
        </div>
      </div>
        </div>
    );
}

export default Signup;