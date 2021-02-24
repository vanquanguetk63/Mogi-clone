import React, { useEffect, useState } from "react";
import Profile from "../../component/profile/Profile";
import "../manage/Manage.css";

function Post(props) {
  return (
    <div className="container-fluid manage">
      <div className="row manage-row">
        <div className="col-md-2 left">
          <div className="mt-3">
            <Profile data={props.data.currentUser}/>
          </div>
          <br/>
          
          <div className="nav-custom mt-4">
            <a  href="/profile/post">
              <i className="fas fa-pen-square mr-2"></i>
              Đăng tin
            </a>

            <a className="active" href="/profile/manage">
              <i className="fas fa-tasks mr-2"></i>
              Quản lý tin đăng
            </a>

            <a href="/profile/edit">
              <i className="fas fa-edit mr-2"></i>
              Sửa thông tin cá nhân
            </a>

            <a href="/logout">
              <i className="fas fa-sign-out-alt mr-2"></i>
              Thoát
            </a>
          </div>
        </div>
        <div className="col-md-10 px-4 right">

        </div>
      </div>
    </div>
  );
}

export default Post;
