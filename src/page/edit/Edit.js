import React from "react";
import Profile from "../../component/profile/Profile";
import "../edit/Edit.css";
import { Confirm } from "react-st-modal";
import { Redirect, useHistory } from "react-router-dom";

const Edit = (props) => {
  const history = useHistory();
  async function logout() {
    const result = await Confirm("Bạn muốn thoát chứ?", "Đăng xuất");

    if (result) {
      localStorage.removeItem("user");
      props.onLogOut();
      history.push("/");
    } else {
      // Сonfirmation not confirmed
    }
  }

  if (props.data.isLogin === true) {
    return (
      <div className="container-fluid manage">
        <div className="row manage-row">
          <div className="col-md-2 left">
            <div className="mt-3">
              <Profile data={props.data.currentUser} />
            </div>
            <br />
  
            <div className="nav-custom mt-1">
              <a href="/profile/post">
                <i className="fas fa-pen-square mr-2"></i>
                Đăng tin
              </a>
  
              <a href="/profile/manage">
                <i className="fas fa-tasks mr-2"></i>
                Quản lý tin đăng
              </a>
  
              <a className="active" href="/profile/edit">
                <i className="fas fa-edit mr-2"></i>
                Sửa thông tin
              </a>
  
              <a href="#" onClick={logout}>
                <i className="fas fa-sign-out-alt mr-2"></i>
                Thoát
              </a>
            </div>
          </div>
          <div className="col-md-10 px-4 right">
            <div className="custom-save-post">
              
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />
  }
};

export default Edit;
