import React, { useEffect, useState } from "react";
import Profile from "../../component/profile/Profile";
import { Redirect } from "react-router-dom";
import address from "../../api/addess";
import type from '../../api/type';
import "../post/Post.css";

function Post(props) {
  const [listProvince, setListProvince] = useState();
  const [myProvince, setMyProvince] = useState();
  const [listDistrict, setListDistrict] = useState();
  const [myDistrict, setMyDistrict] = useState();
  const [listWard, setListWard] = useState();
  const [myWard, setMyWard] = useState();
  const [listStreet, setListStreet] = useState();
  const [myStreet, setMyStreet] = useState();
  const [myAddress, setMyAddress] = useState("");
  const [myHouse, setMyHouse] = useState();
  const [listPurpose, setListPurpose] = useState();
  const [myPurpose, setMyPurpose] = useState();
  const [listType, setListType] = useState();
  const [myType, setMyType] = useState();
  const [loadPurpose, setLoadPurpose] = useState(false);
  const [title, setTitlte] = useState();
  const [description, setDesciption] = useState();
  const [price, setPrice] = useState();
  const [square, setSquare] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    if (loadPurpose === false) {
      type.GetPurpose()
      .then(response => {
        setListPurpose(response);
        setLoadPurpose(true);
      })
      .catch(console.error());
    } 

    if (myPurpose !== 0 && myPurpose !== undefined) {
      type.GetTypeByID(myPurpose)
      .then(response => {
        setListType(response);
      })
      .catch(console.error());
    }

    address.GetByProvince().then((response) => {
      setListProvince(response);
    });
    if (myProvince !== 0 && myProvince !== undefined) {
      address.GetByDistrict(myProvince).then((response) => {
        setListDistrict(response);
      });
    }

    if (myDistrict !== 0 && myDistrict !== undefined) {
      address.GetByWard(myProvince, myDistrict).then((response) => {
        setListWard(response);
      });
    }

    if (myWard !== 0 && myWard !== undefined) {
      address.GetByStreet(myProvince, myDistrict).then((response) => {
        setListStreet(response);
      });
    }
  }, [myProvince, myDistrict, myWard, myStreet, myPurpose]);

  if (props.data.isLogin === true) {
    var elmProvince;
    var elmDistrict;
    var elmWard;
    var elmStreet;
    var elmPurpose;
    var elmType;

    /**
     * Set List address
     */
    if (listProvince !== undefined) {
      elmProvince = listProvince.map((obj) => {
        return (
          <option value={obj.id} key={obj.id}>
            {obj._name}
          </option>
        );
      });

      if (listDistrict !== undefined) {
        elmDistrict = listDistrict.map((obj) => {
          return (
            <option value={obj.id} key={obj.id}>
              {obj._prefix} {obj._name}
            </option>
          );
        });

        if (listWard !== undefined) {
          elmWard = listWard.map((obj) => {
            return (
              <option value={obj.id} key={obj.id}>
                {obj._prefix} {obj._name}
              </option>
            );
          });

          if (listStreet !== undefined) {
            elmStreet = listStreet.map((obj) => {
              return (
                <option value={obj.id} key={obj.id}>
                  {obj._prefix} {obj._name}
                </option>
              );
            });
          }
        }
      }
    }

    if (listPurpose !== undefined) {
      elmPurpose = listPurpose.map((obj) => {
        return <option value={obj.idPurpose} key={obj.idPurpose}>{obj.namePurpose}</option>;
      })

      if (listType !== undefined) {
        elmType = listType.map((obj) => {
          return <option value={obj.idType} key={obj.idType}>{obj.nameType}</option>
        })
      }
    }

    return (
      <div className="container-fluid post">
        <div className="row post-row">
          <div className="col-md-2 left">
            <div className="mt-3">
              <Profile data={props.data} />
            </div>
            <br />

            <div className="nav-custom">
              <a className="active" href="#">
                <i class="fas fa-pen-square mr-2"></i>
                Đăng tin
              </a>

              <a href="#">
                <i class="fas fa-tasks mr-2"></i>
                Quản lý tin đăng
              </a>

              <a href="#">
                <i class="fas fa-edit mr-2"></i>
                Sửa thông tin cá nhân
              </a>

              <a href="#">
                <i class="fas fa-sign-out-alt mr-2"></i>
                Thoát
              </a>
            </div>
          </div>
          <div className="col-md-10 px-4 right">
            <div className="post-title pt-3" style={{ textAlign: "center" }}>
              <b>
                <h3>
                  <b>Đăng tin mới</b>
                </h3>
              </b>
            </div>
            <br />
            <div className="row">
              <div className="col-9 col-md-9">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="post-address">
                    <h4>
                      <b>Địa chỉ cho thuê</b>
                    </h4>

                    <div className="row-1">
                      <div className="form-group">
                        <label>Tỉnh/Thành phố</label>
                        <select
                          className="form-control select-custom"
                          onChange={(event) => {
                            setMyProvince(event.target.value);
                            setMyAddress(
                              event.target.options[event.target.selectedIndex]
                                .text
                            );
                          }}
                        >
                          <option value={0}>-- Chọn thành phố --</option>
                          {elmProvince}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Quận/huyện</label>
                        <select
                          className="form-control select-custom"
                          onChange={(event) => {
                            setMyDistrict(event.target.value);
                            setMyAddress(
                              event.target.options[event.target.selectedIndex]
                                .text +
                                " ," +
                                myAddress
                            );
                          }}
                        >
                          <option value={0}>-- Chọn quận/huyện --</option>
                          {elmDistrict} ;
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Phường xã</label>
                        <select
                          className="form-control select-custom"
                          onChange={(event) => {
                            setMyWard(event.target.value);
                            setMyAddress(
                              event.target.options[event.target.selectedIndex]
                                .text +
                                " ," +
                                myAddress
                            );
                          }}
                        >
                          <option value={0}>-- Chọn phường/xã --</option>
                          {elmWard}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Đường/phố</label>
                        <select
                          className="form-control select-custom"
                          onChange={(event) => {
                            setMyStreet(event.target.value);
                            setMyAddress(
                              event.target.options[event.target.selectedIndex]
                                .text +
                                " ," +
                                myAddress
                            );
                          }}
                        >
                          <option value={0}>-- Chọn đường/phố --</option>
                          {elmStreet}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Số nhà</label>
                      <textarea
                        style={{ width: "20%", height: "50%" }}
                        className="form-control"
                        value={myHouse}
                        onChange={(event) => {
                          setMyHouse(event.target.value);
                          setMyAddress(event.target.value + " ," + myAddress);
                        }}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label>Địa chỉ cụ thể</label>
                      <textarea
                        style={{ width: "50%" }}
                        className="form-control"
                        readOnly
                        value={myAddress}
                      ></textarea>
                    </div>
                  </div>

                  <b>
                    <h4>Mô tả thông tin</h4>
                  </b>

                  <div className="post-infor">
                    <br />
                    <div className="form-group">
                      <label>Mục đích</label>
                      <select className="form-control" style={{ width: "50%" }}
                        onChange = {(event) => {
                          setMyPurpose(event.target.value);
                        }}
                      >
                        <option value={0}>-- Chọn mục đich --</option>
                        {elmPurpose}
                      </select>
                    </div>

                    <br />

                    <div className="form-group">
                      <label>Loại chuyên mục</label>
                      <select className="form-control" style={{ width: "50%" }}
                        onChange = {(event) => {
                          setMyType(event.target.value);
                        }}
                      >
                        <option value={0}>-- Chọn chuyên mục</option>
                        {elmType}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Tiêu đề</label>
                      <textarea
                        style={{ width: "99%" }}
                        className="form-control"
                        rows="1"
                        value={title}
                        onChange = {(event) => setTitlte(event.target.value)}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label>Thông tin chi tiết</label>
                      <textarea
                        style={{ width: "99%" }}
                        className="form-control"
                        rows="10"
                        value={description}
                        onChange = {(event) => setDesciption(event.target.value)}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label>Thông tin liên hệ</label>
                      <textarea
                        style={{ width: "40%" }}
                        className="form-control"
                        rows="1"
                        readOnly
                        value={props.data.currentUser[0].phoneUser}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label>Giá cho thuê</label>
                      <textarea
                        style={{ width: "40%" }}
                        className="form-control"
                        rows="1"
                        value={price}
                        onChange = {(event) => setPrice(event.target.value)}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label>Diện tích</label>
                      <textarea
                        style={{ width: "40%" }}
                        className="form-control"
                        rows="1"
                        value={square}
                        onChange = {(event) => setSquare(event.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="upload-file">
                    <label style={{ fontSize: "20px" }}>Hình ảnh</label>
                    <br />
                    <div className="custom-content">
                      <i
                        style={{ fontSize: "30px" }}
                        className="fas fa-upload"
                      ></i>
                      <h2>Thêm Ảnh</h2>
                    </div>
                    <input
                      className="custom-upload-file"
                      type="file"
                      multiple
                    />
                  </div>

                  <br />
                  <button style={{ width: "100%" }} className="btn btn-success">
                    <b>Đăng tin</b>
                  </button>
                </form>
              </div>

              <div className="col-0 col-md-3 bg-success"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Post;
