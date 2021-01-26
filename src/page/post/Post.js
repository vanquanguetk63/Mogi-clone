import React from "react";
import Profile from "../../component/profile/Profile";
import "../post/Post.css";

function Post(props) {
  return (
    <div className="container-fluid post">
      <div className="row post-row">
        <div className="col-md-2 left">
            <div className="mt-3">
              <Profile/>
            </div>
            <br/>
            
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
              <h3><b>Đăng tin mới</b></h3>
            </b>
          </div>
          <br />
          <div className="row">
            <div className="col-9 col-md-9">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="post-address">
                    <h4><b>Địa chỉ cho thuê</b></h4>

                  <div className="row-1">
                    <div className="form-group">
                      <label>Tỉnh/Thành phố</label>
                      <select className="form-control select-custom">
                        <option>-- Chọn thành phố --</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Quận/huyện</label>
                      <select className="form-control select-custom">
                        <option>-- Chọn quận/huyện --</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Phường xã</label>
                      <select className="form-control select-custom">
                        <option>-- Chọn phường/xã --</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Đường/phố</label>
                      <select className="form-control select-custom">
                        <option>-- Chọn đường/phố --</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ cụ thể</label>
                    <textarea
                      style={{ width: "50%" }}
                      className="form-control"
                      readOnly
                    ></textarea>
                  </div>
                </div>

                <b>
                  <h4>Mô tả thông tin</h4>
                </b>

                <div className="post-infor">
                  <br/>
                  <div>
                    <div className="mr-1">
                      <input className="mr-1" name="forsale" type="radio" />
                      Cần bán
                    </div>
                    <div>
                      <input className="mr-1" name="forsale" type="radio" />
                      Cho thuê
                    </div>
                  </div>

                  <br/>

                  <div className="form-group">
                    <label>Loại chuyên mục</label>
                    <select className="form-control" 
                    style={{width:'50%'}}
                    >
                      <option>-- Chọn chuyên mục</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Tiêu đề</label>
                    <textarea style={{width:'99%'}}
                      className="form-control"
                      rows="1"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Thông tin chi tiết</label>
                    <textarea style={{width:'99%'}}
                      className="form-control"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Thông tin liên hệ</label>
                    <textarea style={{width:'40%'}}
                      className="form-control"
                      rows='1'
                      readOnly
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Giá cho thuê</label>
                    <textarea style={{width:'40%'}}
                      className="form-control"
                      rows='1'
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Diện tích</label>
                    <textarea style={{width:'40%'}}
                      className="form-control"
                      rows='1'
                    ></textarea>
                  </div>




                </div>

                <div className="upload-file">
                  <label style={{fontSize:'20px'}}>Hình ảnh</label>
                  <br/>
                  <div className="custom-content">
                    <i style={{fontSize:'30px'}} className="fas fa-upload"></i>
                    <h2>Thêm Ảnh</h2>
                  </div>
                  <input  className="custom-upload-file" type="file" multiple/>
                  
                </div>

                <br/>
                <button style={{width:'100%'}} className="btn btn-success"><b>Đăng tin</b></button>
              </form>
            </div>

            <div className="col-3 col-md-3 bg-success"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
