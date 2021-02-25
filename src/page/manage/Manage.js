import React, { useEffect, useState } from "react";
import Profile from "../../component/profile/Profile";
import "../manage/Manage.css";
import { Confirm } from "react-st-modal";
import { Redirect, useHistory, withRouter } from "react-router-dom";
import ItemManage from "../../component/itemmanage/ItemManage";
import user from "../../api/user";

function Post(props) {
  const [eventBtn, setEventBtn] = useState(1);
  const [listItem, setListItem] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    if (props.data.isLogin === true) {
      if (eventBtn === 1) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetApprovedPostByIDUser(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      } else if (eventBtn === 2) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetNotApprovedPostByIDUser(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      } else if (eventBtn === 3) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetIsApprovingPostByIDUser(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      } else if (eventBtn === 4) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetFavorite(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      }
    }
  }, [eventBtn]);

  const history = useHistory();

  useEffect(() => {}, [eventBtn]);

  async function logout() {
    const result = await Confirm("Bạn muốn thoát chứ?", "Đăng xuất");

    if (result) {
      localStorage.removeItem("user");
      props.onLogOut();
      props.history.push("/");
    } else {
      // Сonfirmation not confirmed
    }
  }

  const Search = () => {
    if (listItem.length !== 0) {
      let list = listItem.filter((obj) => obj.idPost === id * 1);
      setListItem(list);
    } else {
      if (eventBtn === 1) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetApprovedPostByIDUser(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      } else if (eventBtn === 2) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetNotApprovedPostByIDUser(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      } else if (eventBtn === 3) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetIsApprovingPostByIDUser(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      } else if (eventBtn === 4) {
        let data = {};
        data.id = props.data.currentUser[0].idUser;
        user
          .GetFavorite(data)
          .then((response) => {
            setListItem(response);
          })
          .catch(console.error());
      }
    }
  };

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

              <a className="active" href="/profile/manage">
                <i className="fas fa-tasks mr-2"></i>
                Quản lý tin đăng
              </a>

              <a href="/profile/edit">
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
              <div className="first">
                <ul className="title-save-post">
                  <li
                    className={eventBtn === 1 ? "active" : ""}
                    onClick={() => setEventBtn(1)}
                  >
                    Đã đăng
                  </li>
                  <li
                    className={eventBtn === 2 ? "active" : ""}
                    onClick={() => setEventBtn(2)}
                  >
                    Tin bị từ chối
                  </li>
                  <li
                    className={eventBtn === 3 ? "active" : ""}
                    onClick={() => setEventBtn(3)}
                  >
                    Đang chờ duyệt
                  </li>

                  <li
                    className={eventBtn === 4 ? "active" : ""}
                    onClick={() => setEventBtn(4)}
                  >
                    Tin đã lưu
                  </li>
                </ul>
              </div>
              <div className="search-post">
                <input
                  type="text"
                  placeholder="Mã tin"
                  onChange={(event) => setId(event.target.value)}
                />
                &nbsp;
                <button className="bt-search" onClick={Search}>
                  <i class="fas fa-search"></i> Tìm kiếm
                </button>
              </div>
              <div className="detail-post">
                {listItem !== undefined ? (
                  listItem.length !== 0 ? (
                    listItem.map((obj) => {
                      return <ItemManage data={obj} key={obj.idPost} />;
                    })
                  ) : (
                    <>
                      <p>Không có dữ liệu</p>
                    </>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default withRouter(Post);
