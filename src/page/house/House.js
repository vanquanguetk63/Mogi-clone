import React from "react";
import SlideShow from "../../component/slideshow/SlideShow";
import "../house/House.css";
import home from "../../img/home.jpg";
import ads from "../../img/right.jpg";
import Profile from "../../component/profile/Profile";

const collection = [
  { src: home },
  { src: ads },
  { src: home },
  { src: ads },
  { src: home },
  { src: ads },
];

function House(props) {
  return (
    <div>
      <div className="container house">
        <div>Link</div>
        <div className="row">
          <div className="col-12 col-md-8 ">
            <SlideShow input={collection} />

            <br />

            <div>
              <b>
                <p>
                  Nhà 4 tầng Nguyễn Văn Trỗi Phú Nhuận 45m2 nhỉnh 8 tỷ xe hơi
                  vào nhà.
                </p>
              </b>
              <p>Nguyễn Văn Trỗi, Phường 11, Quận Phú Nhuận, TPHCM</p>
              <p>8 tỷ 500 triệu</p>
            </div>

            <div className="content">
              <div className="title">
                <b>
                  <p>Thông tin chính</p>
                </b>
              </div>
              <div>
                <ul>
                  <li>
                    <span className="row1">Diện tích đất</span>
                    <span className="row1-content">
                      45m<sup>2</sup> (6x7,5)
                    </span>
                  </li>
                  <li>
                    <span className="row1">Nhà tắm</span>
                    <span className="row1-content">5</span>
                  </li>
                  <li>
                    <span className="row1">Ngày đăng</span>
                    <span className="row1-content">18/01/2021</span>
                  </li>
                  <li>
                    <span className="row1">Phòng ngủ</span>
                    <span className="row1-content">2</span>
                  </li>
                  <li>
                    <span className="row1">Pháp lý</span>
                    <span className="row1-content">sổ hồng</span>
                  </li>
                  <li>
                    <span className="row1">Mã bất động sản</span>
                    <span className="row1-content">21129940</span>
                  </li>
                </ul>
              </div>

              <div className="description">
                <div className="title">
                  <b>
                    <p>Giới thiệu</p>
                  </b>
                </div>
                <div className="content">Auto nhá</div>
              </div>
              <br></br>
              <div className="mb-2">
                <button type="button" class="btn btn-outline-warning btn-sm">
                  Báo cáo vi phạm{" "}
                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                </button>
              </div>

              <div>
                <Profile />
              </div>
              
            </div>
          </div>

          <div className="col-0 col-md-4 hh">
            <div className="contact">
              <div className="contact-user">
                <Profile/>
              </div>
              <br/>
              <div className="phone-message">
                <div className="phone">
                  <button className="btn btn-outline-secondary  mr-2">
                    <i class="fa fa-phone mr-1" aria-hidden="true"></i>
                    0969 836 555
                  </button>
                  <button className="btn btn-outline-secondary ">
                    <i class="far fa-envelope mr-1"></i>
                    Gửi tin nhắn
                  </button>
                </div>
              </div>

              <div className="save-post mt-2">
                <button className="btn btn-outline-secondary save">
                  <i class="far fa-save mr-1"></i>
                  Lưu tin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default House;
