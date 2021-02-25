import React, { useEffect, useState } from "react";
import "../admin/Admin.css";
import logo from "../../img/logo.svg";
import Table from "../../component/table/Table";
import Modal from "../../component/modal/Modal";
import admin from "../../api/admin";
import { Redirect } from "react-router-dom";
import { Confirm } from "react-st-modal";

function Admin(props) {
  const [eventTask, setEventTask] = useState(1);
  const [listRow, setListRow] = useState();

  async function LogOutAdmin() {
    const result = await Confirm("Bạn muốn thoát chứ?", "Đăng xuất");
    if (result) {
      props.onLogOut();
    } else {
      // Сonfirmation not confirmed
    }
  }


  useEffect(() => {
    console.log(props.adminUser);
    if (props.adminUser !== "") {
      if (eventTask === 1) {
        admin
          .GetPostIsNotApproved()
          .then((response) => {
            setListRow(response);
          })
          .catch(console.error());
      } else {
        admin
          .GetPostIsApproved()
          .then((response) => {
            console.log(response);

            setListRow(response);
          })
          .catch(console.error());
      }
    }
  }, [eventTask]);

  if (props.adminUser !== "") {
    return (
      <div className="Admin">
        <div className="taskbar">
          <img className="img-logo" src={logo}></img>

          <div
            className={eventTask === 1 ? "custom-task active" : "custom-task"}
            onClick={() => setEventTask(1)}
          >
            <i className="fas fa-check"></i>
            &nbsp; Các tin chưa duyệt
          </div>
          <div
            className={eventTask === 2 ? "custom-task active" : "custom-task"}
            onClick={() => setEventTask(2)}
          >
            <i className="fas fa-tasks"></i>
            &nbsp; Các tin đã duyệt
          </div>

          <div className="custom-task" onClick={LogOutAdmin}>
            <i className="fas fa-sign-out-alt"></i> &nbsp; Thoát
          </div>
          {/* <div className="custom-task">
            <i className="fas fa-sign-out-alt"></i>
            &nbsp; Thoát
          </div> */}
        </div>
        <div className="title"></div>
        <div className="content">
          <div className="tbl">
            <Table
              dataEvent={eventTask}
              data={listRow}
              onEvent={(value) => setListRow(value)}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/admin/login" />;
  }
}

export default Admin;
