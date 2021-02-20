import React, { useEffect, useState } from "react";
import Profile from "../../component/profile/Profile";
import { Redirect } from "react-router-dom";
import address from "../../api/addess";
import type from "../../api/type";
import post from "../../api/post";
import upload from "../../api/upload";
import "../post/Post.css";
import { useHistory } from "react-router-dom";

function Post(props) {
  const [id, setId] = useState();
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
  const [file, setFile] = useState();
  const [img, setImg] = useState("");
  const [msgValidation, setMsgValidation] = useState("");
  const [bedroom, setBedroom] = useState();
  const [toilet, setToilet] = useState();

  const history = useHistory();

  var msg = {
    errAddress: "",
    errType: "",
    errPurpose: "",
    errTitle: "",
    errDescription: "",
    errPrice: "",
    errSquare: "",
    errBedroom: "",
    errToilet: "",
    errImg: ""
  };

  useEffect(() => {
    if (id === undefined) {
      post
        .GetNewId()
        .then((response) => {
          setId(response);
        })
        .catch(console.error());
    }

    if (file !== undefined && file !== "") {
      var formdata = new FormData();
      for (var i = 0; i < file.length; i++) {
        formdata.append("image", file[i]);
      }
      upload
        .UploadImagePost(formdata)
        .then((response) => {
          for (var i = 0; i < response.length; i++) {
            setImg((img) => [...img, response[i]]);
          }
        })
        .catch(console.error());

      setFile("");
    }

    if (loadPurpose === false) {
      type
        .GetPurpose()
        .then((response) => {
          setListPurpose(response);
          setLoadPurpose(true);
        })
        .catch(console.error());
    }

    if (myPurpose !== 0 && myPurpose !== undefined) {
      type
        .GetTypeByID(myPurpose)
        .then((response) => {
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
  }, [myProvince, myDistrict, myWard, myStreet, myPurpose, file]);

  const Validation = () => {
    // console.log(img);
    // console.log(id);
    // console.log(myProvince);
    // console.log(myDistrict);
    // console.log(myWard);
    // console.log(myStreet);
    // console.log(myHouse);
    // console.log(myAddress);
    // console.log(myType);
    // console.log(title);
    // console.log(description);
    // console.log(square);
    // console.log(img)
    if (
      myProvince === undefined ||
      myDistrict === undefined ||
      myWard === undefined ||
      myStreet === undefined ||
      myHouse === undefined
    ) {
      msg.errAddress = "Vui lòng nhập địa chỉ đầy đủ.";
    } else {
      msg.errAddress = "";
    }

    if (myType === undefined) {
      msg.errType = "Vui lòng chọn loại chuyên mục.";
    } else {
      msg.errType = "";
    }

    if (myPurpose === undefined) {
      msg.errPurpose = "Vui lòng chọn loại nhà.";
    } else {
      msg.errPurpose = "";
    }

    if (title === undefined || title === "") {
      msg.errTitle = "Vui lòng nhập tiêu đề.";
    } else {
      msg.errTitle = "";
    }

    if (description === undefined || description === "") {
      msg.errDescription = "Vui lòng nhập nội dung.";
    } else {
      msg.errDescription = "";
    }

    if (price === undefined || price === "") {
      msg.errPrice = "Vui lòng nhập giá nhà đất.";
    } else {
      var n = price * 1;
      console.log(typeof n);
      msg.errPrice = "";
    }

    if (square === undefined || square === "") {
      msg.errSquare = "Vui lòng nhập diện tích nhà.";
    } else {
      msg.errSquare = "";
    }

    if (bedroom === undefined || bedroom === "") {
      msg.errBedroom = "Vui lòng nhập số phòng ngủ.";
    } else {
      msg.errBedroom = "";
    }

    if (toilet === undefined || toilet === "") {
      msg.errToilet = "Vui lòng nhập số phòng vệ sinh.";
    } else {
      msg.errToilet = "";
    }

    if (img === undefined || img === "") {
      msg.errImg = "Vui lòng thêm ảnh.";
    } else {
      msg.errImg = "";
    }

    setMsgValidation(msg);

    if (
      msg.errAddress === "" &&
      msg.errDescription === "" &&
      msg.errPrice === "" &&
      msg.errType === "" &&
      msg.errPurpose === "" &&
      msg.errTitle === "" &&
      msg.errSquare === "" &&
      msg.errBedroom === "" &&
      msg.errToilet === "" &&
      msg.errImg === ""
    ) {
      UploadToServer();
    }
  };

  const UploadToServer = () => {
    let arr = description.split("\n");
    let des = "";
    for (var i = 0; i < arr.length; i++) {
      des += "<p>" + arr[i] + "<p/>";
    }

    let data = {};
    data.id = id;
    data.title = title;
    data.description = des;
    data.address = myAddress;
    data.price = price;
    data.square = square;
    data.idUser = props.data.currentUser[0].idUser;
    data.idProvince = myProvince;
    data.idDistrict = myDistrict;
    data.idWard = myWard;
    data.idStreet = myStreet;
    data.approval = 1;
    data.idPurpose = myPurpose;
    data.idType = myType;
    data.bedroom = bedroom;
    data.toilet = toilet;

    post
      .PostToServer(data)
      .then((response) => {
        if (response === 200) {
          if (img !== "") {
            let listImg = {};
            listImg.img = img;
            listImg.idPost = id;
            post
              .PostImgToServer(listImg)
              .then((response) => {
                if (response === 200) {
                  history.push("/");
                }
              })
              .catch(console.error());
          }
        }
      })
      .catch(console.error());
  };

  const uploadImg = (event) => {
    if (img.length > 6) {
      alert("Tối đa 6 ảnh.");
      setFile("");
    } else {
      setFile(event.target.files);
    }
  };

  if (props.data.isLogin === true) {
    var elmProvince;
    var elmDistrict;
    var elmWard;
    var elmStreet;
    var elmPurpose;
    var elmType;
    var elmImg;

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
        return (
          <option value={obj.idPurpose} key={obj.idPurpose}>
            {obj.namePurpose}
          </option>
        );
      });

      if (listType !== undefined) {
        elmType = listType.map((obj) => {
          return (
            <option value={obj.idType} key={obj.idType}>
              {obj.nameType}
            </option>
          );
        });
      }
    }

    if (img !== "") {
      // console.log(img);
      elmImg = img.map((obj) => {
        return (
          <div className="col-md-2" key={obj.id}>
            <img className="detail" src={obj.url} />
          </div>
        );
      });
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
                      <span className="err">{msgValidation.errAddress}</span>
                    </div>
                  </div>

                  <b>
                    <h4>Mô tả thông tin</h4>
                  </b>

                  <div className="post-infor">
                    <br />
                    <div className="form-group">
                      <label>Mục đích</label>
                      <select
                        className="form-control"
                        style={{ width: "50%" }}
                        onChange={(event) => {
                          setMyPurpose(event.target.value);
                        }}
                      >
                        <option value={0}>-- Chọn mục đich --</option>
                        {elmPurpose}
                      </select>
                      <span className="err">{msgValidation.errType}</span>
                    </div>

                    <div className="form-group">
                      <label>Loại chuyên mục</label>
                      <select
                        className="form-control"
                        style={{ width: "50%" }}
                        onChange={(event) => {
                          setMyType(event.target.value);
                        }}
                      >
                        <option value={0}>-- Chọn chuyên mục</option>
                        {elmType}
                      </select>

                      <span className="err">{msgValidation.errPurpose}</span>
                    </div>

                    <div className="form-group">
                      <label>Tiêu đề</label>
                      <textarea
                        style={{ width: "99%" }}
                        className="form-control"
                        rows="1"
                        value={title}
                        onChange={(event) => setTitlte(event.target.value)}
                      ></textarea>
                      <span className="err">{msgValidation.errTitle}</span>
                    </div>

                    <div className="form-group">
                      <label>Thông tin chi tiết</label>
                      <textarea
                        style={{ width: "99%" }}
                        className="form-control"
                        rows="10"
                        value={description}
                        onChange={(event) => setDesciption(event.target.value)}
                      ></textarea>
                      <span className="err">
                        {msgValidation.errDescription}
                      </span>
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
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                      ></textarea>
                      <span className="err">{msgValidation.errPrice}</span>
                    </div>

                    <div className="form-group">
                      <label>Diện tích</label>
                      <textarea
                        style={{ width: "40%" }}
                        className="form-control"
                        rows="1"
                        value={square}
                        onChange={(event) => setSquare(event.target.value)}
                      ></textarea>
                      <span className="err">{msgValidation.errSquare}</span>
                    </div>

                    <div className="form-group">
                      <label>Phòng ngủ</label>
                      <textarea
                        style={{ width: "40%" }}
                        className="form-control"
                        rows="1"
                        value={bedroom}
                        onChange={(event) => setBedroom(event.target.value)}
                      ></textarea>
                      <span className="err">{msgValidation.errBedroom}</span>
                    </div>

                    <div className="form-group">
                      <label>Nhà vệ sinh</label>
                      <textarea
                        style={{ width: "40%" }}
                        className="form-control"
                        rows="1"
                        value={toilet}
                        onChange={(event) => setToilet(event.target.value)}
                      ></textarea>
                      <span className="err">{msgValidation.errToilet}</span>
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
                      onChange={uploadImg}
                    />
                    

                  </div>
                  <span className="err">{msgValidation.errImg}</span>
                  <div className="img-show mt-4">
                    <div className="row">
                      {/* <div className='col-md-2'>
                          <img
                          src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                          className='detail'>
                          </img>
                          <button className="delete"><i class="fas fa-trash-alt mr-1"></i>Xóa</button>
                        </div> */}
                      {elmImg}
                    </div>
                  </div>

                  <br />
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-success"
                    onClick={Validation}
                  >
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
